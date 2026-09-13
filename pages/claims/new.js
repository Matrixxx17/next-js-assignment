import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
const validationSchema = Yup.object({
  policyNo: Yup.string()
    .required("Policy number is required")
    .matches(
      /^HDFC-LIFE-[0-9]{4}$/,
      "Policy number must match HDFC-LIFE-XXXX"
    ),

  claimAmount: Yup.number()
    .required("Claim amount is required")
    .min(1, "Claim amount must be at least 1")
    .max(500000, "Claim amount cannot exceed 500000"),

  urgency: Yup.string()
    .required("Urgency is required")
    .oneOf(
      ["HIGH", "MEDIUM", "LOW"],
      "Please select a valid urgency"
    ),

  hospitalName: Yup.string(),

  email: Yup.string()
    .required("Email is required")
    .email("Enter a valid email"),

  remarks: Yup.string()
    .max(200, "Remarks cannot exceed 200 characters")
});
export default function NewClaim() {
  const [successMessage, setSuccessMessage] = useState("");

  return (
    <div className="claim-form-page">
      <section className="claim-form-intro">
        <span className="page-kicker">CLAIMS OPERATIONS</span>

        <h1>
          File a
          <span>Claim.</span>
        </h1>

        <p>
          Start a new claim by providing the policy,
          claimant, and incident details below.
        </p>

        <div className="claim-form-note">
          <span>01</span>
          <p>
            Make sure your policy number and contact
            details are accurate before submitting.
          </p>
        </div>
      </section>

      <section className="claim-form-card">
        {successMessage && (
          <div className="claim-success">
            <span>✓</span>
            {successMessage}
          </div>
        )}

        <Formik
          initialValues={{
            policyNo: "",
            claimAmount: "",
            urgency: "",
            hospitalName: "",
            email: "",
            remarks: ""
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);

            setSuccessMessage(
              `Claim submitted for ${values.policyNo}`
            );
          }}
        >
          <Form>
            <div className="form-section-label">
              POLICY DETAILS
            </div>

            <div className="form-field">
              <label htmlFor="policyNo">
                Policy Number
              </label>

              <Field
                id="policyNo"
                name="policyNo"
                type="text"
                placeholder="HDFC-LIFE-1001"
              />

              <ErrorMessage
                name="policyNo"
                component="div"
                className="form-error"
              />
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="claimAmount">
                  Claim Amount
                </label>

                <Field
                  id="claimAmount"
                  name="claimAmount"
                  type="number"
                  placeholder="25000"
                />

                <ErrorMessage
                  name="claimAmount"
                  component="div"
                  className="form-error"
                />
              </div>

              <div className="form-field">
                <label htmlFor="urgency">
                  Urgency
                </label>

                <Field
                  as="select"
                  id="urgency"
                  name="urgency"
                >
                  <option value="">
                    Select urgency
                  </option>
                  <option value="HIGH">HIGH</option>
                  <option value="MEDIUM">MEDIUM</option>
                  <option value="LOW">LOW</option>
                </Field>

                <ErrorMessage
                  name="urgency"
                  component="div"
                  className="form-error"
                />
              </div>
            </div>

            <div className="form-section-label">
              CLAIMANT DETAILS
            </div>

            <div className="form-field">
              <label htmlFor="hospitalName">
                Hospital Name
              </label>

              <Field
                id="hospitalName"
                name="hospitalName"
                type="text"
                placeholder="Optional"
              />
            </div>

            <div className="form-field">
              <label htmlFor="email">
                Email Address
              </label>

              <Field
                id="email"
                name="email"
                type="email"
                placeholder="advisor@example.com"
              />

              <ErrorMessage
                name="email"
                component="div"
                className="form-error"
              />
            </div>

            <div className="form-field">
              <label htmlFor="remarks">
                Remarks
              </label>

              <Field
                as="textarea"
                id="remarks"
                name="remarks"
                rows="5"
                placeholder="Add any additional information..."
              />

              <ErrorMessage
                name="remarks"
                component="div"
                className="form-error"
              />
            </div>

            <div className="form-submit-row">
              <span>
                Fields marked by validation are required.
              </span>

              <button type="submit">
                Submit Claim
                <span>↗</span>
              </button>
            </div>
          </Form>
        </Formik>
      </section>
    </div>
  );
}