import { useState } from "react";
import { uploadResume } from "../../services/resumeService";

const UploadResume = () => {
  const [file, setFile] = useState<File | null>(null);

  const [loading, setLoading] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const handleUpload = async () => {

    if (!file) {

      setMessage(
        "Please select a resume first"
      );

      return;
    }

    try {

      setLoading(true);

      const response =
        await uploadResume(file);

      console.log(response);

      setMessage(
        "Resume analyzed successfully"
      );

    } catch (error) {

      console.error(error);

      setMessage(
        "Resume upload failed"
      );

    } finally {

      setLoading(false);

    }

  };

  return (
    <div className="min-h-screen bg-[#020B23] text-white p-10">

      <h1 className="text-4xl font-bold mb-2">
        Upload Resume
      </h1>

      <p className="text-gray-400 mb-8">
        Upload your latest resume and
        let SkillPath AI analyze your
        profile.
      </p>

      <label
        className="
        w-full
        h-80
        border-2
        border-dashed
        border-purple-500/50
        rounded-3xl
        flex
        flex-col
        justify-center
        items-center
        cursor-pointer
        hover:border-purple-400
        transition
        "
      >

        <input
          type="file"
          accept=".pdf"
          className="hidden"
          onChange={(e) =>
            setFile(
              e.target.files?.[0] || null
            )
          }
        />

        <div className="text-center">

          <div className="text-6xl mb-4">
            📄
          </div>

          <h2 className="text-2xl font-semibold">
            Click To Upload Resume
          </h2>

          <p className="text-gray-400 mt-3">
            Supported Format: PDF
          </p>

          {file && (
            <div
              className="
              mt-6
              bg-purple-500/20
              px-5
              py-3
              rounded-xl
              "
            >
              Selected:
              {" "}
              {file.name}
            </div>
          )}

        </div>

      </label>

      <button
        onClick={handleUpload}
        disabled={loading}
        className="
        mt-8
        px-8
        py-4
        rounded-xl
        bg-purple-600
        hover:bg-purple-700
        disabled:bg-gray-700
        "
      >

        {loading
          ? "Analyzing Resume..."
          : "Analyze Resume"}

      </button>

      {message && (
        <div
          className="
          mt-6
          p-4
          rounded-xl
          bg-white/5
          border
          border-white/10
          "
        >
          {message}
        </div>
      )}

    </div>
  );
};

export default UploadResume;