export const freePlan = {
  title: "Free Token",
  price: 0,
  conditions: [
    {
      title: "Ethereum compatible",
      available: true,
    },
    {
      title: "Verified source code",
      available: true,
    },
    {
      title: "ERC20 Complete",
      available: true,
    },
    {
      title: "Remove copyright",
      available: false,
    },
    {
      title: "Customizable decimals",
      available: false,
    },
    {
      title: "Customizable supply",
      available: false,
    },
    {
      title: "Custom max supply",
      available: false,
    },
    {
      title: "Mintable",
      available: false,
    },
    {
      title: "Burnable",
      available: false,
    },
  ],
};

export const basePlan = {
  title: "Basic Token",
  price: 100,
  conditions: [
    {
      title: "Ethereum compatible",
      available: true,
    },
    {
      title: "Verified source code",
      available: true,
    },
    {
      title: "ERC20 Complete",
      available: true,
    },
    {
      title: "Remove copyright",
      available: true,
    },
    {
      title: "Customizable decimals",
      available: false,
    },
    {
      title: "Customizable supply",
      available: false,
    },
    {
      title: "Custom max supply",
      available: false,
    },
    {
      title: "Mintable",
      available: false,
    },
    {
      title: "Burnable",
      available: false,
    },
  ],
};

export const customPlan = {
  title: "Custom Token",
  price: 150,
  conditions: [
    {
      title: "Ethereum compatible",
      available: true,
    },
    {
      title: "Verified source code",
      available: true,
    },
    {
      title: "ERC20 Complete",
      available: true,
    },
    {
      title: "Remove copyright",
      available: true,
    },
    {
      title: "Customizable decimals",
      available: true,
    },
    {
      title: "Customizable supply",
      available: true,
    },
    {
      title: "Custom max supply",
      available: false,
    },
    {
      title: "Mintable",
      available: false,
    },
    {
      title: "Burnable",
      available: false,
    },
  ],
};

export const mintable = {
  title: "Mintable Token",
  price: 200,
  conditions: [
    {
      title: "Ethereum compatible",
      available: true,
    },
    {
      title: "Verified source code",
      available: true,
    },
    {
      title: "ERC20 Complete",
      available: true,
    },
    {
      title: "Remove copyright",
      available: true,
    },
    {
      title: "Customizable decimals",
      available: true,
    },
    {
      title: "Customizable supply",
      available: true,
    },
    {
      title: "Custom max supply",
      available: false,
    },
    {
      title: "Mintable",
      available: true,
    },
    {
      title: "Burnable",
      available: false,
    },
  ],
};

export const unlimited = {
  title: "Unlimited Token",
  price: 250,
  conditions: [
    {
      title: "Ethereum compatible",
      available: true,
    },
    {
      title: "Verified source code",
      available: true,
    },
    {
      title: "ERC20 Complete",
      available: true,
    },
    {
      title: "Remove copyright",
      available: true,
    },
    {
      title: "Customizable decimals",
      available: true,
    },
    {
      title: "Customizable supply",
      available: true,
    },
    {
      title: "Custom max supply",
      available: true,
    },
    {
      title: "Mintable",
      available: true,
    },
    {
      title: "Burnable",
      available: false,
    },
  ],
};

export const fullToken = {
  title: "Full Token",
  price: 300,
  conditions: [
    {
      title: "Ethereum compatible",
      available: true,
    },
    {
      title: "Verified source code",
      available: true,
    },
    {
      title: "ERC20 Complete",
      available: true,
    },
    {
      title: "Remove copyright",
      available: true,
    },
    {
      title: "Customizable decimals",
      available: true,
    },
    {
      title: "Customizable supply",
      available: true,
    },
    {
      title: "Custom max supply",
      available: true,
    },
    {
      title: "Mintable",
      available: true,
    },
    {
      title: "Burnable",
      available: true,
    },
  ],
};

export default {
  tokens: [freePlan, basePlan, customPlan, mintable, unlimited, fullToken],
};
