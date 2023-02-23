import { Dialog, Transition } from '@headlessui/react';
import { Fragment, MutableRefObject, Ref, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

export default function GetCssButton({
  value,
}: {
  value: MutableRefObject<HTMLButtonElement | undefined>;
}) {
  const [modal, setModal] = useState(false);
  const [copied, setCopied] = useState(false);
  return (
    <>
      <button className="btn-primary btn w-full rounded-lg text-lg font-bold normal-case">
        Get Css
      </button>
      <Transition appear show={modal} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setModal(false)}
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
                  <div className="mt-4 flex justify-end gap-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-black bg-transparent px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => setModal(false)}
                    >
                      Close
                    </button>
                    {/* <CopyToClipboard text={value}>
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-black bg-blue-600 px-4 py-2 text-sm font-medium text-zinc-50 hover:bg-blue-200 hover:text-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={() => setCopied(true)}
                      >
                        Copy To Clipboard
                      </button>
                    </CopyToClipboard> */}
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
