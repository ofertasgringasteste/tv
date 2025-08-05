interface StreamingLogoProps {
  name: string;
  className?: string;
}

export const StreamingLogo = ({ name, className = "" }: StreamingLogoProps) => {
  const getLogoData = (serviceName: string) => {
    const logoMap: { [key: string]: { src: string; backgroundColor: string } } = {
      "Netflix": { src: "/logos/Logo-Netflix.png", backgroundColor: "#FFFFFF" },
      "HBO MAX": { src: "/logos/hbo_max.png", backgroundColor: "#030327" },
      "Disney+": { src: "/logos/disney_plus_logo.png", backgroundColor: "#113CCF" },
      "Prime Video": { src: "/logos/prime_video.png", backgroundColor: "#289BFE" },
      "Apple TV+": { src: "/logos/Apple_tv.png", backgroundColor: "#FFFFFF" },
      "Star+": { src: "/logos/Star.png", backgroundColor: "#FFFFFF" },
      "Paramount+": { src: "/logos/paramount_logo.png", backgroundColor: "#FFFFFF" },
      "Paramount": { src: "/logos/paramount_logo.png", backgroundColor: "#FFFFFF" },
      "Crunchyroll": { src: "/logos/crunch.png", backgroundColor: "#FFFFFF" }
    };

    return logoMap[serviceName];
  };

  const logoData = getLogoData(name);

  if (logoData) {
    return (
      <div
        className={`rounded-lg p-3 flex items-center justify-center min-h-[60px] shadow-sm ${className}`}
        style={{ backgroundColor: logoData.backgroundColor }}
      >
        <img
          src={logoData.src}
          alt={`${name} logo`}
          className="max-h-10 max-w-full object-contain"
          onError={(e) => {
            // Fallback se a imagem não carregar
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            target.parentElement!.innerHTML = `<span class="text-white text-sm font-semibold">${name}</span>`;
          }}
        />
      </div>
    );
  }

  // Fallback para plataformas sem logo disponível
  const getTextLogo = (serviceName: string) => {
    switch (serviceName) {
      case "Movistar+":
        return (
          <div
            className="rounded-lg px-4 py-2 flex items-center justify-center min-h-[60px]"
            style={{ backgroundColor: '#0066CC' }}
          >
            <div className="text-center">
              <div className="text-white font-bold text-sm">Movistar</div>
              <div className="text-white text-lg font-bold">+</div>
            </div>
          </div>
        );

      default:
        return (
          <div
            className="rounded-lg px-4 py-2 flex items-center justify-center min-h-[60px]"
            style={{ backgroundColor: '#141414' }}
          >
            <span className="text-white text-sm font-semibold">{serviceName}</span>
          </div>
        );
    }
  };

  return (
    <div className={className}>
      {getTextLogo(name)}
    </div>
  );
};