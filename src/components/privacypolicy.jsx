// src/pages/PrivacyPolicy.jsx
import React from "react";

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-white py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-teal-800 mb-4">
          Privacy Policy
        </h1>

        <p className="text-sm text-gray-600 mb-6">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="prose prose-lg max-w-none mb-6">
          <p>
            This Privacy Policy governs how <strong>Elite Matrimony Breaue</strong> ("the Company", "we", "us") 
            collects, uses, discloses and safeguards the information provided by applicants to our matrimony services.
          </p>

          <h2>Applicant information & responsibility</h2>
          <p>
            The Company will not be responsible or liable for any information provided by the applicant. The Company will not be liable in case of any wrong match made due to any misrepresentation.
          </p>

          <h2>Validity & renewal</h2>
          <p>
            Validity of an application shall be for one year and may be renewed only on a written request without any additional charges.
          </p>

          <h2>Matches & proposals</h2>
          <p>
            If any match is sent which does not conform to the requirements of the candidate, the same shall not be considered as a proposal and hence not counted.
          </p>

          <h2>Verification & accuracy</h2>
          <p>
            The applicant / his or her representative shall have the right to verify the credentials/facts of the proposed candidate. Any information/details furnished by the applicant, if found incorrect or coming to the notice of the Company, all the benefits under this Agreement may be withheld, suspended or forfeited, and action may be taken against the applicant.
          </p>

          <h2>Incomplete registration</h2>
          <p>
            The registration form has to be complete in order to proceed further. In case any information is not furnished at the time of submitting the application, then the same will not be considered for the purpose of match making. The remaining/required information has to be furnished within the next 15 days after submitting the incomplete application; failing which the initial deposit would stand forfeited.
          </p>

          <h2>Change in particulars</h2>
          <p>
            If the applicant fails to inform the Company about any change in the particulars furnished or in the "Present Status Card" supplied to the applicant then the applicant shall be suspended from being considered.
          </p>

          <h2>Company rights</h2>
          <p>
            The Company reserves the right to alter, suspend, or terminate the application of any member in case the Company finds the application against the interest of the Company or the interest of other applicants.
          </p>

          <h2>Age verification</h2>
          <p>
            It is the duty of the concerned persons to make sure that the eligible applicants have attained the age of majority at the time of their marriage.
          </p>

          <h2>Ancillary services</h2>
          <p>
            The Company reserves the right to add, delete, alter, modify or suspend any or all the ancillary/ complimentary services at any time as it may deem fit.
          </p>

          <h2>Number of options</h2>
          <p>
            The Company is under no obligation to furnish any definite number of options if there are none corresponding to the bio-data / match desired criteria in the database; towards any applicant. Each applicant will be entitled to a maximum of twenty five responses / options at first registration.
          </p>

          <h2>Reporting incorrect information</h2>
          <p>
            In case the applicant or his/her representative comes to know about any incorrect information provided by any other applicant, the same should be brought to the knowledge of the Company immediately.
          </p>

          <h2>Privacy of other applicants</h2>
          <p>
            The Company will not be under any obligation to give any information / details about other applicants, without the written consent of the applicant concerned.
          </p>

          <h2>Jurisdiction & dispute resolution</h2>
          <p>
            The Delhi courts only will have the jurisdiction to settle all disputes between the parties and the provisions of the Arbitration Act will be applicable.
          </p>

          <h2>Right to accept/reject</h2>
          <p>
            The Company reserves the right to consider or reject any application.
          </p>

          <h2>Fees & refunds</h2>
          <p>
            The processing fee & registration / membership charges are non-refundable under any circumstances.
          </p>
        </section>

        <section className="text-sm text-gray-600">
          <p>
            <strong>Company name:</strong> Elite Matrimony Breaue
          </p>
          <p>
            <strong>Contact:</strong> sycoriaanteam@gmail.com | +91 7838500048
          </p>
          <p className="mt-6">
            If you have any questions about this Privacy Policy, please contact us at the above email address.
          </p>
        </section>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
