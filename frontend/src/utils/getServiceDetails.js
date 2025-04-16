const getServiceDetails = (categorySlug, subcategorySlug, serviceSlug) => {
    const category = allServices.find(cat => cat.categorySlug === categorySlug);
    if (!category) return null;
  
    const subcategory = category.subcategories.find(sub => sub.slug === subcategorySlug);
    if (!subcategory) return null;
  
    const service = subcategory.sections.flatMap(section => section.services)
      .find(s => s.slug === serviceSlug); // Use slug match
  
    if (!service) return null;
  
    let providers = [];
  
    if (service.providers && service.providers.length > 0) {
      providers = service.providers
        .map(provider => products.find(p => p._id === provider.providerId))
        .filter(Boolean);
    } else {
      providers = products.filter(
        (product) =>
          product.category?.toLowerCase() === category.name?.toLowerCase() &&
          product.subCategory?.toLowerCase() === subcategory.name?.toLowerCase()
      );
    }
  
    return {
      serviceName: service.name,
      description: service.description,
      providers
    };
  };
  