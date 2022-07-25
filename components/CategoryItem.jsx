import Image from "next/image";

const CategoryItem = ({ img, title, viewers, tag1, tag2 }) => {
  return (
    <div className="p-2">
      <div className="flex hoverViolet duration-200">
        <Image src={img} width="261" height="350" alt="/" />
      </div>
      <div>
        <p className="pt-2">{title}</p>
        <p className="text-sm text-gray-500 py-[2px]">{viewers}</p>
        <div className="flex">
          <div>
            <p className="text-sm bg-gray-800 rounded-full inline-block p-[2px] px-2 hover:bg-gray-700 hover:cursor-pointer">
              {tag1}
            </p>
          </div>
          <div className="pl-1">
            {tag2 ? (
              <p className="text-sm bg-gray-800 rounded-full inline-block p-[2px] px-3 hover:bg-gray-700 hover:cursor-pointer">
                {tag2}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
