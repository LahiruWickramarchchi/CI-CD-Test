
'use client';

import { useState } from 'react';

export default function HomePage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main>
      {submitted ? (
        <h2 style={{ textAlign: 'center', marginTop: '3rem' }}>
          ✅ Thank you for your feedback !
        </h2>
      ) : (
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={() => setSubmitted(true)}
        >
          <input type="hidden" name="form-name" value="contact" />
          <h2>Contact Us</h2>
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Message:
            <textarea name="message" rows={5} required />
          </label>
          <button type="submit">Send Feedback</button>
        </form>
      )}
    </main>
  );
}
