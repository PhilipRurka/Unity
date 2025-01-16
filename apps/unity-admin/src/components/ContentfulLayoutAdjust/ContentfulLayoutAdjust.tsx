import { Button } from '@unity/components';

const ContentfulLayoutAdjust = () => {
  const script = `
    window.unity = {
      isHideSidebar : false
    }

    window.unity.hideSidebar = () => {
      document.querySelectorAll('[data-test-id="cf-layout-sidebar"]').forEach((element) => {
        element.style.display = 'none';
      })

      document.querySelectorAll('[data-test-id="cf-layout-content-container"]').forEach((element) => {
        element.style.display = 'block';
      })
    }

    window.unity.showSidebar = () => {
      document.querySelectorAll('[data-test-id="cf-layout-sidebar"]').forEach((element) => {
        element.style.display = 'block';
      })

      document.querySelectorAll('[data-test-id="cf-layout-content-container"]').forEach((element) => {
        element.style.display = 'grid';
      })
    }

    document.addEventListener('keydown', (event) => {
      if (event.key === '\\\\') {
        event.preventDefault()
        
        if (window.unity.isHideSidebar) {
          window.unity.showSidebar()
        } else {
          window.unity.hideSidebar()
        }

        window.unity.isHideSidebar = !window.unity.isHideSidebar
      }
    });
  `;

  const handleCopyContentfulLayoutToClipboard = () => {
    try {
      navigator.clipboard.writeText(script);
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
      <pre className="mt-6 text-xs">{script}</pre>
    </>
  );
};

export default ContentfulLayoutAdjust;
