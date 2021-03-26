module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "category": "url('components/Category/images/main/categoryBg.svg')",
        "footer": "url('components/footer/footerImg/Rectangle_397.svg')",
        "tagsOrange": "url('components/Tags/images/bgOrange.svg')",
        "tagsBlue": "url('components/Tags/images/bgBlue.svg')",
      }),
      textColor: (theme) => ({
        Sea: "#00CCA9",
        Orange: "#FF9F39",
        Blue: "#466FBD",
        Crimson: "#BD467F",
        Gray: "#979797",
        DarkGreen: "#00ad90",
        BlackGray: "#212121"
      }),
      backgroundColor: (theme) => ({
        Sea: "#00CCA9",
        Orange: "#FF9F39",
        Blue: "#466FBD",
        Crimson: "#BD467F",
        lightGray: "#F6F6F6",
        lightGreen: "#E6FAF6",
      }),
      borderColor: (theme) => ({
        Sea: "#00CCA9",
        Orange: "#FF9F39",
        Blue: "#466FBD",
        Crimson: "#BD467F",
        default: "#979797",
      }),
      borderRadius: {
        "10px": "10px",
        2.5: "1.25rem",
      },
      boxShadow: {
        drop: "0 4px 4px rgba(0, 0, 0, 0.25)",
      },
      minWidth: {
        14: "60px",
        320: "320px"
      },
      maxWidth: {
        25: "100px",
        60: "250px",
      },
      width: {
        95: "375px"
      },
      screens: {
        "xs": "320px",
        "s": "375px"
      }
    },
    fontFamily: {
      sans: ["Montserrat", "ui-sans-serif", "system-ui"],
    },
    variants: {
        extend: {
            textColor: ["active"],
            backgroundColor: ["active"],
            borderColor: ["active"],
            borderRadius: ["hover", "focus"],
            fill: ["hover", "focus"],
        },
    },
    plugins: [],
  },
};
