'use client';

import { useState } from 'react';

export default function HomePage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    setSubmitted(true);
  };

  return (
    <main>
      {submitted ? (
        <h2 style={{ textAlign: 'center', marginTop: '3rem' }}>
          ✅ Thank you for your feedback!
        </h2>
      ) : (
        <form onSubmit={handleSubmit}>
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
