export default function Privacy() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
      <p>
        This website does not collect any personally identifiable information.
      </p>
      <p>
        Third-party services such as Google AdSense may use cookies to serve ads
        based on your visit to this and other websites.
      </p>
      <p>
        For more information, visit{" "}
        <a
          className="text-blue-600 underline"
          href="https://policies.google.com/technologies/ads"
          target="_blank"
          rel="noreferrer"
        >
          Google’s Advertising Policies
        </a>
        .
      </p>
    </div>
  );
}
