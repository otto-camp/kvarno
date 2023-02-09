import { useGradientContext } from '#/src/context/GradientContext';
import { Dialog, Transition } from '@headlessui/react';
import { toPng } from 'html-to-image';
import { Fragment, RefObject, useCallback, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

function GetCssButton({ divRef }: { divRef: RefObject<HTMLDivElement> }) {
  const {
    firstColor,
    secondColor,
    firstColorPosition,
    secondColorPosition,
    degree,
    type,
  } = useGradientContext();
  const [copied, setCopied] = useState(false);
  const [extractGradientModal, setExtractGradientModal] = useState(false);

  const handleDownload = useCallback(() => {
    if (divRef.current === null) {
      return;
    }
    toPng(divRef.current, {
      cacheBust: true,
      canvasWidth: 3840,
      canvasHeight: 2160,
    })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'kvarno.png';
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => console.error(err));
  }, [divRef]);

  let value = `
  background:${firstColor};
  background: ${
    type === 'linear'
      ? `linear-gradient(${degree}deg,${firstColor} ${firstColorPosition}%, ${secondColor} ${secondColorPosition}%);`
      : `radial-gradient(circle,${firstColor} ${firstColorPosition}%, ${secondColor} ${secondColorPosition}%);`
  }
  background:${
    type === 'linear'
      ? `-moz-linear-gradient(${degree}deg,${firstColor} ${firstColorPosition}%, ${secondColor} ${secondColorPosition}%);
    background: -webkit-linear-gradient(${degree}deg,${firstColor} ${firstColorPosition}%, ${secondColor} ${secondColorPosition}%);`
      : `-moz-radial-gradient(circle,${firstColor} ${firstColorPosition}%, ${secondColor} ${secondColorPosition}%);
    background: -webkit-radial-gradient(circle,${firstColor} ${firstColorPosition}%, ${secondColor} ${secondColorPosition}%);`
  }
  `;

  return (
    <>
      <div className="mx-2 flex gap-4">
        <button
          onClick={() => setExtractGradientModal(true)}
          className="w-1/2 rounded-lg border border-black bg-blue-700 py-2 px-4 font-bold text-white transition-colors hover:bg-blue-900 "
        >
          Get CSS
        </button>
        <button
          onClick={handleDownload}
          className="w-1/2 rounded-lg border border-black bg-green-700 py-2 px-4 font-bold text-white transition-colors hover:bg-green-900 "
        >
          Download Image
        </button>
      </div>
      <Transition appear show={extractGradientModal} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setExtractGradientModal(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-2/3  transform overflow-hidden rounded-2xl bg-gray-200 p-6 text-left align-middle shadow-xl transition-all">
                  <textarea
                    readOnly
                    className="w-full resize-none rounded-lg bg-gray-700 p-2"
                    rows={6}
                    value={value}
                  />

                  <div className="mt-4 flex justify-end gap-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-black bg-transparent px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => setExtractGradientModal(false)}
                    >
                      Close
                    </button>
                    <CopyToClipboard text={value}>
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-black bg-blue-600 px-4 py-2 text-sm font-medium text-zinc-50 hover:bg-blue-200 hover:text-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={() => setCopied(true)}
                      >
                        Copy To Clipboard
                      </button>
                    </CopyToClipboard>
                  </div>
                  {copied && (
                    <div className="mt-4 text-center text-black">Copied!</div>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default GetCssButton;
