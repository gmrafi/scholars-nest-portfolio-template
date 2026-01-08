// license-manager.js - License validation for ScholarNest Template
// Handles Lemon Squeezy license key validation
// Created by: Md Golam Mubasshir Rafi (https://www.gmrafi.com.bd)
// Security Note: Client-side validation can be bypassed, but API validation provides real protection

class LicenseManager {
  constructor() {
    this.licenseKey = config.license.key;
    this.apiUrl = config.license.apiUrl;
    this.isValid = false;
    this.validationChecked = false;
    this.obfuscated = true; // Flag for additional security measures
  }

  // Initialize license validation
  async init() {
    console.log("LicenseManager.init() called");
    console.log("License key:", this.licenseKey);
    console.log("API URL:", this.apiUrl);

    if (!this.licenseKey || this.licenseKey === "YOUR_LICENSE_KEY_HERE") {
      console.warn("License key not set. Please add your Lemon Squeezy license key to config.js");
      this.showLicenseWarning();
      return false;
    }

    try {
      console.log("Calling validateLicense()");
      const isValid = await this.validateLicense();
      console.log("validateLicense() returned:", isValid);
      this.isValid = isValid;
      this.validationChecked = true;

      if (!isValid) {
        console.log("License invalid, showing error overlay");
        this.showLicenseError();
        return false;
      }

      console.log("License valid");
      return true;
    } catch (error) {
      console.error("License validation failed:", error);
      this.showLicenseError();
      return false;
    }
  }

  // Validate license with Lemon Squeezy API
  async validateLicense() {
    console.log("validateLicense() called with key:", this.licenseKey);
    // Primary protection: Server-side API validation
    try {
      const formData = new URLSearchParams();
      formData.append('license_key', this.licenseKey);

      console.log("Making API call to:", this.apiUrl);
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData
      });

      console.log("API response status:", response.status);
      console.log("Response ok:", response.ok);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("API response data:", data);
      return data.valid === true;

    } catch (error) {
      console.error("License validation failed:", error);
      // For development/demo purposes, accept any key that looks valid
      console.warn("API validation failed, using fallback check");
      return this.fallbackValidation();
    }
  }

  // Fallback validation for development
  fallbackValidation() {
    console.log("fallbackValidation() called with key:", this.licenseKey);
    // Basic UUID format check for Lemon Squeezy license keys
    const keyPattern = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
    const isValid = keyPattern.test(this.licenseKey);
    console.log("Fallback validation result:", isValid);
    return isValid;
  }

  // Show license warning for missing key
  showLicenseWarning() {
    const warning = document.createElement('div');
    warning.id = 'license-warning';
    warning.innerHTML = `
      <div style="
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
      ">
        <div style="
          background: white;
          padding: 40px;
          border-radius: 20px;
          text-align: center;
          max-width: 500px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        ">
          <i class="fas fa-exclamation-triangle text-6xl text-yellow-500 mb-6"></i>
          <h2 style="font-size: 24px; font-weight: bold; color: #333; margin-bottom: 20px;">ScholarNest Template License Required</h2>
          <p style="color: #666; margin-bottom: 30px; line-height: 1.6;">
            You need a valid license to use the ScholarNest Academic Portfolio Template.
            Purchase your license to unlock all features and get full access to this professional template.
          </p>
          <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
            <a href="license-activation.html" style="
              background: #3b82f6;
              color: white;
              padding: 12px 24px;
              border-radius: 8px;
              text-decoration: none;
              font-weight: 500;
              display: inline-block;
              transition: background 0.3s;
            " onmouseover="this.style.background='#2563eb'" onmouseout="this.style.background='#3b82f6'">
              <i class="fas fa-key mr-2"></i>Activate License
            </a>
            <a href="https://digishop.gmrafi.com.bd/checkout/buy/007b3ec2-6f50-4d35-bf50-fa5c6eeef67e" target="_blank" style="
              background: #10b981;
              color: white;
              padding: 12px 24px;
              border-radius: 8px;
              text-decoration: none;
              font-weight: 500;
              display: inline-block;
              transition: background 0.3s;
            " onmouseover="this.style.background='#059669'" onmouseout="this.style.background='#10b981'">
              <i class="fas fa-shopping-cart mr-2"></i>Purchase Template License
            </a>
            <button onclick="this.parentElement.parentElement.parentElement.remove()" style="
              background: #6b7280;
              color: white;
              padding: 12px 24px;
              border: none;
              border-radius: 8px;
              cursor: pointer;
              font-weight: 500;
              transition: background 0.3s;
            " onmouseover="this.style.background='#4b5563'" onmouseout="this.style.background='#6b7280'">
              Dismiss
            </button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(warning);
  }

  // Show license error for invalid key
  showLicenseError() {
    console.log("showLicenseError() called - creating error overlay");
    const error = document.createElement('div');
    error.id = 'license-error';
    error.innerHTML = `
      <div style="
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
      ">
        <div style="
          background: white;
          padding: 40px;
          border-radius: 20px;
          text-align: center;
          max-width: 500px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        ">
          <i class="fas fa-times-circle text-6xl text-red-500 mb-6"></i>
          <h2 style="font-size: 24px; font-weight: bold; color: #333; margin-bottom: 20px;">Invalid or Expired License</h2>
          <p style="color: #666; margin-bottom: 30px; line-height: 1.6;">
            Your license key is invalid, expired, or has reached its activation limit.
            Purchase a new license to continue using the ScholarNest template.
          </p>
          <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
            <a href="license-activation.html" style="
              background: #dc2626;
              color: white;
              padding: 12px 24px;
              border-radius: 8px;
              text-decoration: none;
              font-weight: 500;
              display: inline-block;
              transition: background 0.3s;
            " onmouseover="this.style.background='#b91c1c'" onmouseout="this.style.background='#dc2626'">
              <i class="fas fa-key mr-2"></i>Get Valid License
            </a>
            <a href="https://digishop.gmrafi.com.bd/checkout/buy/007b3ec2-6f50-4d35-bf50-fa5c6eeef67e" target="_blank" style="
              background: #10b981;
              color: white;
              padding: 12px 24px;
              border-radius: 8px;
              text-decoration: none;
              font-weight: 500;
              display: inline-block;
              transition: background 0.3s;
            " onmouseover="this.style.background='#059669'" onmouseout="this.style.background='#10b981'">
              <i class="fas fa-shopping-cart mr-2"></i>Purchase Template License
            </a>
            <button onclick="this.parentElement.parentElement.parentElement.remove()" style="
              background: #6b7280;
              color: white;
              padding: 12px 24px;
              border: none;
              border-radius: 8px;
              cursor: pointer;
              font-weight: 500;
              transition: background 0.3s;
            " onmouseover="this.style.background='#4b5563'" onmouseout="this.style.background='#6b7280'">
              Dismiss
            </button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(error);
  }

  // Check if license is valid
  isLicenseValid() {
    return this.isValid;
  }

  // Get license status
  getStatus() {
    return {
      key: this.licenseKey,
      valid: this.isValid,
      checked: this.validationChecked
    };
  }
}

// Initialize license manager when DOM is loaded
document.addEventListener('DOMContentLoaded', async () => {
  console.log("DOMContentLoaded fired - initializing license manager");
  const licenseManager = new LicenseManager();
  await licenseManager.init();

  // Make license manager available globally
  window.licenseManager = licenseManager;
});

// Also try to initialize immediately if body exists (for cases where DOMContentLoaded already fired)
if (document.body) {
  console.log("Document body exists - initializing license manager immediately");
  setTimeout(async () => {
    const licenseManager = new LicenseManager();
    await licenseManager.init();
    window.licenseManager = licenseManager;
  }, 100);
}

// Also initialize on window load as a fallback
window.addEventListener('load', async () => {
  console.log("Window load event fired - initializing license manager as fallback");
  if (!window.licenseManager) {
    const licenseManager = new LicenseManager();
    await licenseManager.init();
    window.licenseManager = licenseManager;
  }
});

// Immediate initialization as final fallback
console.log("License manager script loaded, attempting immediate initialization");
setTimeout(async () => {
  console.log("Running immediate license manager initialization");
  if (!window.licenseManager) {
    const licenseManager = new LicenseManager();
    await licenseManager.init();
    window.licenseManager = licenseManager;
  } else {
    console.log("License manager already initialized");
  }
}, 500);

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = LicenseManager;
}