// src/HealthCheckupPage.js
import React from 'react';
import './HealthCheckupPage.css';
import Header from './Header';
import Footer from './Footer';

const healthPackages = [
  { name: 'Basic Health Checkup', price: 799, tests: ['Blood Sugar', 'Cholesterol', 'CBC', 'Urine'] },
  { name: 'Full Body Checkup', price: 1499, tests: ['Liver Function', 'Thyroid', 'Vitamin D', 'Sugar'] },
  { name: 'Advanced Health Checkup', price: 2599, tests: ['MRI', 'CT Scan', 'Kidney Function', 'ECG'] },
  { name: 'Heart Checkup', price: 1099, tests: ['ECG', 'Blood Pressure', 'Cholesterol', 'Sugar'] },
  { name: 'Diabetes Panel', price: 699, tests: ['HbA1c', 'Blood Sugar Fasting', 'Urine Routine'] },
  { name: 'Liver Function Test', price: 999, tests: ['SGOT', 'SGPT', 'Bilirubin', 'Albumin'] },
  { name: 'Kidney Function Test', price: 999, tests: ['Creatinine', 'Urea', 'Electrolytes', 'GFR'] },
  { name: 'Thyroid Profile', price: 899, tests: ['TSH', 'T3', 'T4'] },
  { name: 'Women Wellness Check', price: 1299, tests: ['Pap Smear', 'Vitamin D', 'Calcium', 'CBC'] },
  { name: 'Senior Citizen Checkup', price: 1799, tests: ['BP', 'Sugar', 'ECG', 'Bone Density'] },
  { name: 'Men’s Wellness Package', price: 1599, tests: ['PSA', 'Liver', 'Kidney', 'Cholesterol'] },
  { name: 'Post-COVID Checkup', price: 1299, tests: ['D-Dimer', 'CRP', 'CBC', 'LFT'] },
  { name: 'Pre-Employment Checkup', price: 999, tests: ['X-Ray', 'Urine', 'CBC', 'BP'] },
  { name: 'Bone Health Package', price: 1199, tests: ['Vitamin D', 'Calcium', 'Phosphorus'] },
  { name: 'Cancer Screening', price: 1999, tests: ['CA-125', 'PSA', 'Mammogram', 'X-Ray'] },
  { name: 'Fever Panel', price: 899, tests: ['Dengue', 'Malaria', 'Typhoid', 'CBC'] },
  { name: 'Nutrition Check', price: 1099, tests: ['Iron', 'Vitamin B12', 'Vitamin D'] },
  { name: 'Hypertension Panel', price: 999, tests: ['BP', 'ECG', 'Cholesterol', 'Kidney'] },
  { name: 'Pregnancy Health Check', price: 1499, tests: ['Ultrasound', 'Urine', 'CBC', 'Thyroid'] },
  { name: 'Skin & Hair Check', price: 1399, tests: ['Vitamin B12', 'Zinc', 'Iron', 'Thyroid'] },
];

const HealthCheckupPage = () => {
  return (
    <>
      <Header />
  
      <div className="health-checkup-container">
        <h2>Health Checkup Packages</h2>
        <div className="packages-grid">
          {healthPackages.map((pkg, index) => (
            <div className="package-card" key={index}>
              <h3>{pkg.name}</h3>
              <ul>
                {pkg.tests.map((test, i) => (
                  <li key={i}>{test}</li>
                ))}
              </ul>
              <div className="package-bottom">
                <p className="price">₹{pkg.price}</p>
                <button className="book-btn">Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
  
      <Footer />
    </>
  );
}

export default HealthCheckupPage;
