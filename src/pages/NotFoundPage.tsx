import { Helmet } from 'react-helmet-async';

function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Page Not Found - RGB Corporation</title>
        <meta name="description" content="Sorry, the page you are looking for does not exist at RGB Corporation." />
      </Helmet>
      <div style={{ paddingTop: '200px', padding: '50px', textAlign: 'center', minHeight: 'calc(100vh - 224px)' }}>
        <h1>404 - Page Not Found</h1>
        <p>It looks like the page you were looking for doesn't exist. You can return to the home page:</p>
        <a href="/">Return to the home page</a>
      </div>
    </>
  );
}
export default NotFoundPage;