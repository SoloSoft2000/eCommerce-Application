const variantsSlider = {
    moveNext: {
      x: "2%",
      opacity: 0.3,
      transition: { duration: 0.5, ease: "easeInOut" }
    },
    movePrevious: {
      x: "-2%",
      opacity: 0.3,
      transition: { duration: 0.5, ease: "easeInOut" }
    },
    vision: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const variantsArrows = {
    hover: {
      scale: 1.2,
    },
  };

  const variantsDots = {
    initial: {
      y: 0,
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 },
    },
    animate: {
      y: -7,
      scale: 1.2,
      transition: { type: "spring", stiffness: 800, damping: "8" },
    },
  };

  export { variantsSlider, variantsArrows, variantsDots };
