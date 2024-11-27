import LogoZone from "@/components/Layout/LogoZone";

export default function PrepAlert({ message, closeModal }) {
    return (
      <dialog id="my_modal_1" className="modal" open>
        <div className="modal-box bg-white border-4 border-black">
            <div className="flex items-center justify-center h-full mb-5">
                <LogoZone />
            </div>
          <h3 className="font-bold text-lg">{message}</h3>
          <p className="pt-8">
            빠른 시일 내에 준비하도록 하겠습니다. <br/>
           아래 버튼을 눌러 창을 닫을 수 있습니다.
          </p>
          <div className="modal-action">
            <button className="btn" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      </dialog>
    );
  }
  