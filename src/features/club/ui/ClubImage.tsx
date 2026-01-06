'use client';
import Image from "next/image";
import Photo from "@/shared/assets/icons/Photo";
import Delete from "@/shared/assets/icons/Delete";

const ClubImage = ({ image, setImage }: { image: string; setImage: (image: string) => void }) => {

  const handleClubImage = async (event: { target: { files: FileList | null; }; }) => {
    const file = event.target.files![0];

    if (!file) {
      return;
    } 
    
    else {
      setImage("/loading-spinner.gif");

      const reader = new FileReader();
      reader.readAsDataURL(file);
      
      reader.onload = (event) => {
        if (reader.readyState === 2) {
          const imgUrl = reader.result as string;
          setImage(imgUrl);
        }
      };
    }
  };

  const deleteImage = () => {
    setImage("/default-image.png");
  };

  return (
    <div>
      <div className="relative mt-2">
        {image === "/default-image.png" ? (
          <div
            className="flex items-center justify-center bg-[#F4F4F4] rounded-lg h-[160]"
          >
            <button
              onClick={() => {
              (document.querySelector('#img') as HTMLElement)?.click();
              }} 
              type="button"
              className="bg-none border-none cursor-pointer"
            >
            <Photo />
            </button>
          </div>
        ) : (
          <div>
            <Image
              className="relative aspect-[2/1] rounded-lg"
              src={image}
              alt="업로드된 사진"
              width={400}
              height={200}
              style={{ objectFit: "cover"}}
            />

            <button
              onClick={deleteImage}
              type="button"
              className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md cursor-pointer"
            >
              <Delete />
            </button>
          </div>
        )}
      </div>
      <input
        type="file"
        id="img"
        onChange={handleClubImage}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default ClubImage;