// getRecommendations.js

function calculateScore(product, selectedPreferences, selectedFeatures) {
  let score = 0;

  selectedPreferences.forEach((pref) => {
    if (product.preferences.includes(pref)) {
      score += 1;
    }
  });

  selectedFeatures.forEach((feature) => {
    if (product.features.includes(feature)) {
      score += 1;
    }
  });

  return score;
}

function rankProducts(products, selectedPreferences, selectedFeatures) {
  return products
    .map((product) => ({
      product,
      score: calculateScore(product, selectedPreferences, selectedFeatures),
    }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => {
      if (b.score === a.score) {
        return products.indexOf(b.product) - products.indexOf(a.product);
      }
      return b.score - a.score;
    });
}

function getRecommendations(
  formData = {
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: "",
  },
  products = []
) {
  const {
    selectedPreferences,
    selectedFeatures,
    selectedRecommendationType,
  } = formData;

  const ranked = rankProducts(products, selectedPreferences, selectedFeatures);
  const filteredProducts = ranked.map(({ product }) => product);

  if (selectedRecommendationType === "SingleProduct") {
    return filteredProducts.slice(0, 1);
  }

  return filteredProducts;
}

export default { getRecommendations };
