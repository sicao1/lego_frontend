import { useState, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Form = (props) => {
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();
  const params = useParams();

  // will get current set here for edit
  const currentSet = useMemo(
    () => props.posts.find((post) => post.id === parseInt(params.id)),
    [params.id, props.posts],
  );

  const [formData, setFormData] = useState(
    props.formType === "new"
      ? {
          name: "",
          item_number: "",
          theme: "",
          img_url: "",
          built: false,
          wishlist: false,
          pieces: "",
        }
      : {
          name: currentSet.name,
          item_number: currentSet.item_number,
          theme: currentSet.theme,
          img_url: currentSet.img_url,
          built: currentSet.built,
          wishlist: currentSet.wishlist,
          pieces: currentSet.pieces,
          id: parseInt(currentSet.id),
        },
  );

  // function to handle change and submit
  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: value,
    }));
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    props.handleSubmit(formData, props.formType);
    navigate("/");
  };

  return (
    <>
      <button
        className="button"
        type="Button"
        onClick={() => setShowModal(true)}
      >
        Edit Info
      </button>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            <div className="relative mx-auto my-6 w-auto max-w-3xl">
              {/*content*/}
              <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="border-blueGray-200 flex items-start justify-between rounded-t border-b border-solid p-5">
                  <h3 className="text-3xl font-semibold">Title</h3>
                  <button
                    className="float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none text-black opacity-5 outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="block h-6 w-6 bg-transparent text-2xl text-black opacity-5 outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative flex-auto p-6">
                  <div className="relative flex-auto p-6">
                    <form onSubmit={handleSubmission}>
                      <h3>Name</h3>
                      <input
                        type="text"
                        onChange={handleChange}
                        value={formData.name}
                        name="name"
                      />
                      <h3>Item #</h3>
                      <input
                        type="number"
                        onChange={handleChange}
                        value={formData.item_number}
                        name="item_number"
                      />
                      <h3>Pieces</h3>
                      <input
                        type="number"
                        onChange={handleChange}
                        value={formData.pieces}
                        name="pieces"
                      />
                      <h3>Theme</h3>
                      <input
                        type="text"
                        onChange={handleChange}
                        value={formData.theme}
                        name="theme"
                      />
                      <h3>Assembled</h3>
                      <input
                        type="checkbox"
                        onChange={handleChange}
                        value={formData.built}
                        name="built"
                      />
                      <h3>Img Url</h3>
                      <input
                        type="text"
                        onChange={handleChange}
                        value={formData.img_url}
                        name="img_url"
                      />
                      <input
                        type="submit"
                        value={props.buttonLabel}
                        className="button cursor-pointer"
                      />
                    </form>
                  </div>
                </div>

                {/*footer*/}
                <div className="border-blueGray-200 flex items-center justify-end rounded-b border-t border-solid p-6">
                  <button
                    className="background-transparent mb-1 mr-1 px-6 py-2 text-sm font-bold uppercase text-red-500 outline-none transition-all duration-150 ease-linear focus:outline-none"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="mb-1 mr-1 rounded bg-emerald-500 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-emerald-600"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
};

export default Form;
