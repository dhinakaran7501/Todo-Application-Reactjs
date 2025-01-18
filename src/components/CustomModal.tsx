import { CgClose } from "react-icons/cg";
import { CustomModalProps } from "../@types/component";

const CustomModal = ({
  title,
  onPressNegativeBtn,
  onPressPositiveBtn,
  onPressResetBtn,
  isOpen = false,
  negativeText = "Close",
  positiveText = "Submit",
  ResetText,
  renderContent,
}: CustomModalProps) => {
  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-[var(--light-card-footer-bg)] bg-opacity-50 z-50">
        <div className="bg-[var(--card-bg)] w-[35%] p-6 rounded-lg shadow-lg">
          <div className="flex justify-between items-center border-b pb-3 border-[var(--border-color)]">
            <h2 className="text-xl font-medium capitalize text-[var(--text-color)]">
              {title}
            </h2>
            <button
              className="text-[var(--text-color)] text-lg"
              onClick={onPressNegativeBtn}
            >
              <CgClose />
            </button>
          </div>
          <div className="my-4 max-h-[70vh]">{renderContent()}</div>
          <div className="">
            {(positiveText || negativeText) && (
              <div className="flex justify-end space-x-3 pt-4 border-t  border-[var(--border-color)]">
                {negativeText && (
                  <button
                    className="transition-all text-white py-1 px-6 md:py-1 md:px-5 flex items-center gap-2 bg-red-600 rounded-md hover:bg-red-700"
                    onClick={onPressNegativeBtn}
                  >
                    {negativeText}
                  </button>
                )}
                {positiveText && (
                  <button
                    type="button"
                    className="bg-[var(--btn-bg)] hover:bg-[var(--btn-hover-bg)] transition-all text-white py-1 px-6 md:py-2 md:px-5 rounded-md flex items-center gap-2"
                    onClick={onPressPositiveBtn}
                  >
                    {positiveText}
                  </button>
                )}
                {ResetText && (
                  <button
                    className="px-7 py-3 text-sm font-semibold text-white bg-yellow-600 rounded hover:bg-yellow-700"
                    onClick={onPressResetBtn}
                  >
                    {ResetText}
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default CustomModal;
