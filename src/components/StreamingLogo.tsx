interface StreamingLogoProps {
  name: string;
  className?: string;
}

export const StreamingLogo = ({ name, className = "" }: StreamingLogoProps) => {
  const logoStyles = {
    Netflix: "bg-red-600 text-white font-bold",
    "HBO MAX": "bg-purple-600 text-white font-bold",
    "Disney+": "bg-blue-600 text-white font-bold", 
    "Prime Video": "bg-blue-400 text-white font-bold",
    "Apple TV+": "bg-gray-900 text-white font-bold",
    "Star+": "bg-orange-500 text-white font-bold",
    Paramount: "bg-blue-700 text-white font-bold",
    Crunchyroll: "bg-orange-600 text-black font-bold",
    Globoplay: "bg-red-500 text-white font-bold"
  };

  const style = logoStyles[name as keyof typeof logoStyles] || "bg-gray-700 text-white";

  return (
    <div className={`${style} px-4 py-2 rounded-lg text-center flex items-center justify-center min-h-[60px] ${className}`}>
      <span className="text-sm font-semibold">{name}</span>
    </div>
  );
};