import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { Engine, Container } from "@tsparticles/engine"; // Импортируем типы
import { loadSlim } from "@tsparticles/slim"; // Используем slim-пакет для частиц

interface ParticlesComponentProps {
  id: string; // Определяем интерфейс для пропсов
}

const ParticlesComponent: React.FC<ParticlesComponentProps> = (props) => {
  const [init, setInit] = useState<boolean>(false);

  // Инициализация движка частиц
  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine); // Загружаем slim-пакет
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Колбэк, когда частицы загружены
  const particlesLoaded = async (container: Container | undefined): Promise<void> => {
    if (container) {
      console.log(container); // Обрабатываем только если container определён
    }
    return Promise.resolve(); // Возвращаем Promise<void>
  };

  // Определяем опции для частиц
  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#1E2F97",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse" as const, // Явно указываем тип
          },
          onHover: {
            enable: true,
            mode: "grab" as const, // Явно указываем тип
          },
        },
        modes: {
          push: {
            distance: 200,
            duration: 15,
          },
          grab: {
            distance: 150,
          },
        },
      },
      particles: {
        color: {
          value: "#FFFFFF",
        },
        links: {
          color: "#FFFFFF",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none" as const, // Явно указываем тип
          enable: true,
          outModes: {
            default: "bounce" as const, // Явно указываем тип
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 150,
        },
        opacity: {
          value: 1.0,
        },
        shape: {
          type: "circle" as const, // Явно указываем тип
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  // Рендерим компонент Particles
  return <Particles id={props.id} particlesLoaded={particlesLoaded} options={options} />;
};

export default ParticlesComponent;