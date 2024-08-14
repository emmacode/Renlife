import React, { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import upload from "public/upload.svg";
import logo from "public/logo.png";

interface PredictionResult {
  prediction: number;
  result: string;
}

const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API;

export default function Survey() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [result, setResult] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setIsloading] = useState<boolean>(false);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    } else {
      setError("Please select a JPG or PNG image.");
      event.target.value = "";
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedFile) {
      setError("Please select an image first.");
      return;
    }

    setIsloading(true);
    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await fetch(`${apiUrl}`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result: PredictionResult = await response.json();
        setResult(result.result);
      } else {
        setError("Error uploading image");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsloading(false);
    }
  };

  return (
    <section className="flex flex-col items-center mt-12 md:mt-28">
      <Image
        src={logo}
        width={174}
        height={54}
        className="border-2 rounded-[50px] border-greyA px-10 py-5"
        alt="renlife logo"
      />

      <div className="flex flex-col items-center bg-greyA mt-28 mx-7 md:mx-0 md:w-3/5 p-10">
        <div className="flex flex-col">
          <h5 className="text-blackA text-xs mb-2">upload your photo</h5>
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <div
              onClick={() =>
                document
                  .querySelector<HTMLInputElement>(".input-field")
                  ?.click()
              }
              className="flex flex-col justify-center items-center p-5 md:p-0 border bg-white border-solid border-greenB w-[200px] h-[100px] md:w-[500px] md:h-[200px] cursor-pointer rounded-[5px] relative overflow-hidden"
            >
              {previewUrl ? (
                <Image
                  src={previewUrl}
                  alt="Preview"
                  layout="fill"
                  objectFit="cover"
                />
              ) : (
                <>
                  <Image
                    alt=""
                    src={upload}
                    width={40}
                    height={40}
                    className="text-gray-500 opacity-80"
                  />
                  <p className="text-xs text-center md:text-lg font-semibold mt-2 text-secondary">
                    Your image goes here
                  </p>
                </>
              )}
            </div>
            <input
              id="image"
              name="image"
              type="file"
              accept=".jpg,.jpeg,.png"
              className="input-field hidden"
              onChange={handleFileChange}
            />
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-secondary text-white rounded hover:bg-[#A2A6E3] disabled:bg-gray-400 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? "predicting..." : "Upload"}
            </button>
          </form>
        </div>

        {result && (
          <div className="flex flex-col items-center mt-10">
            <div className="flex items-center">
              <h1 className="text-xl font-bold mr-2">Result:</h1>
              <h1 className="text-lg text-[#484848]">Baby is {result}</h1>
            </div>
            <p className="mt-4 text-sm text-blackA max-w-md text-center">
              {result === "Jaundiced" ? (
                <span className="font-semibold text-blackA">
                  Please consult a pediatrician immediately. This result
                  suggests possible jaundice, but a professional medical
                  evaluation is necessary for accurate diagnosis and treatment.
                </span>
              ) : (
                <span>
                  While the analysis doesn&apos;t indicate jaundice, continue
                  monitoring your baby&apos;s health. If you notice any changes
                  or have concerns, don&apos;t hesitate to consult your
                  healthcare provider.
                </span>
              )}
            </p>
          </div>
        )}

        <div className="mt-20">
          <div>
            <h2 className="text-xl md:text-2xl text-blackA font-poppins font-semibold mb-4">
              About Neonatal Jaundice
            </h2>
            <p className="mb-4 text-blackA text-xs lg:text-sm font-poppins">
              Neonatal jaundice is a common condition in newborns where the skin
              and whites of the eyes appear yellow. It&apos;s caused by high
              levels of bilirubin in the blood.
            </p>
            <h3 className="font-semibold text-xl md:text-2xl text-blackA mb-2">
              Symptoms to watch for:
            </h3>
            <ul className="list-disc text-blackA text-sm pl-5 mb-4">
              <li>Yellowing of the skin and whites of the eyes</li>
              <li>Poor feeding or lethargy</li>
              <li>Dark urine or pale stools</li>
            </ul>
            <p className="mb-4 text-sm text-blackA">
              If you notice these symptoms, consult your pediatrician
              immediately.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-xl md:text-2xl font-semibold text-blackA mb-4">
              How Our Detection Works
            </h2>
            <p className="text-blackA text-sm">
              Our system analyzes the RGB color values of the uploaded image to
              detect signs of jaundice. While this tool can be helpful, it
              should not replace professional medical advice.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4 text-blackA">FAQs</h2>
            <div className="space-y-4">
              <details className="bg-white p-4 rounded">
                <summary className="font-bold cursor-pointer text-blackA">
                  Is jaundice in newborns dangerous?
                </summary>
                <p className="mt-2 text-blackA">
                  While mild jaundice is common and often harmless, severe cases
                  can lead to complications if left untreated. Always consult
                  with a healthcare professional.
                </p>
              </details>
              <details className="bg-white p-4 rounded">
                <summary className="font-bold cursor-pointer text-blackA">
                  How is jaundice treated?
                </summary>
                <p className="mt-2 text-blackA">
                  Treatment may include phototherapy (light therapy), increased
                  feeding, and in severe cases, exchange transfusion. Your
                  doctor will determine the best course of action.
                </p>
              </details>
            </div>
          </div>
        </div>

        <footer className="mt-12 text-center text-gray-600">
          <p>
            For more information, visit{" "}
            <a
              href="https://www.healthline.com/health/jaundice-types"
              className="text-blue-500 hover:underline"
            >
              Healthline: Jaundice
            </a>
          </p>
          <p className="mt-2">
            Always consult with a healthcare professional for medical advice.
          </p>
        </footer>
      </div>
    </section>
  );
}
