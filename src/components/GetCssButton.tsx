import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useButtonContext } from '../context/ButtonContext';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import style from 'react-syntax-highlighter/dist/esm/styles/hljs/dracula';
import html from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';

export default function GetCssButton() {
  const {
    text,
    textColor,
    textSize,
    border,
    borderColor,
    borderWidth,
    borderRadius,
    width,
    height,
    bgColor,
  } = useButtonContext();
  const [modal, setModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const value = border
    ? `<button style="color:${textColor}; font-size:${textSize}px; border:solid; border-color:${borderColor};border-width:${borderWidth}px; border-radius:${borderRadius}px; padding-inline:${width}px; padding-block:${height}px; background-color:${bgColor};">${text}</button>`
    : `color:${textColor}; font-size:${textSize};padding-inline:${width}; padding-block:${height}; background-color:${bgColor};`;

  return (
    <>
      <button
        onClick={() => setModal(true)}
        className="btn-primary btn w-full rounded-lg text-lg font-medium normal-case"
      >
        Get Css with inline styles
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
            <div className="flex min-h-full flex-col items-center justify-center p-4 text-center">
              <Transition
                className="w-full flex justify-center"
                show={copied}
                enter="transition-opacity duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="alert alert-info mb-24 w-2/3 shadow-lg">
                  Copied!
                </div>
              </Transition>

              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-2/3  transform overflow-hidden rounded-md bg-gray-200 p-6 text-left align-middle shadow-xl transition-all">
                  <SyntaxHighlighter
                    language={html}
                    wrapLongLines
                    style={style}
                  >
                    {value}
                  </SyntaxHighlighter>
                  <div className="mt-4 flex justify-end gap-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-black bg-transparent px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => {
                        setModal(false);
                        setCopied(false);
                      }}
                    >
                      Close
                    </button>
                    <CopyToClipboard text={value}>
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-black bg-blue-600 px-4 py-2 text-sm font-medium text-zinc-50 hover:bg-blue-200 hover:text-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={() => {
                          setCopied(true);
                        }}
                      >
                        Copy To Clipboard
                      </button>
                    </CopyToClipboard>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
