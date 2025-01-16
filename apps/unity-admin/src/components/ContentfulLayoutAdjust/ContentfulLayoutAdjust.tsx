import { Button } from '@unity/components';

const ContentfulLayoutAdjust = () => {
  const handleCopyContentfulLayoutToClipboard = () => {
    try {
      navigator.clipboard.writeText(`
        window.unity = {
          isHideSidebar : false
        }
        
        window.unity.hideSidebar = () => {
          document.querySelector('[data-test-id="cf-layout-sidebar"]').style.display = 'none';
          document.querySelector('[data-test-id="cf-layout-content-container"]').style.display = 'block';
        }
        
        window.unity.showSidebar = () => {
          document.querySelector('[data-test-id="cf-layout-sidebar"]').style.display = 'block';
          document.querySelector('[data-test-id="cf-layout-content-container"]').style.display = 'grid';
        }
        
        document.addEventListener('keydown', (event) => {
          if (event.key === '\\\\') {
            if (window.unity.isHideSidebar) {
              window.unity.showSidebar()
            } else {
              window.unity.hideSidebar()
            }
            window.unity.isHideSidebar = !window.unity.isHideSidebar
          }
        });
      `);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <>
      <Button color="black" size="small" onClick={handleCopyContentfulLayoutToClipboard}>
        Copy Code
      </Button>
      <pre className="mt-6 text-xs">
        {`
          window.unity = {
            isHideSidebar : false
          }

          window.unity.hideSidebar = () => {
            document.querySelector('[data-test-id="cf-layout-sidebar"]').style.display = 'none';
            document.querySelector('[data-test-id="cf-layout-content-container"]').style.display = 'block';
          }

          window.unity.showSidebar = () => {
            document.querySelector('[data-test-id="cf-layout-sidebar"]').style.display = 'block';
            document.querySelector('[data-test-id="cf-layout-content-container"]').style.display = 'grid';
          }

          document.addEventListener('keydown', (event) => {
            if (event.key === '\\\\') {
              if (window.unity.isHideSidebar) {
                window.unity.showSidebar()
              } else {
                window.unity.hideSidebar()
              }

              window.unity.isHideSidebar = !window.unity.isHideSidebar
            }
          });
        `}
      </pre>
    </>
  );
};

export default ContentfulLayoutAdjust;
