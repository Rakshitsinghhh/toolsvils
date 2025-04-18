import React from 'react';
import styled from 'styled-components';
import { 
  FaArrowRight, 
  FaTractor, 
  FaIndustry, 
  FaBlender, 
  FaTools 
} from 'react-icons/fa';

const ProductSection = styled.section`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 2rem;
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const CategoryCard = styled.div`
  background: ${props => props.bgColor || '#fff5e6'};
  border-radius: 12px;
  overflow: hidden;
  padding: 2rem;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CategoryIcon = styled.div`
  font-size: 3rem;
  color: #2e7d32;
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;

  ${CategoryCard}:hover & {
    transform: scale(1.1);
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const CategoryDescription = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const ShopNowButton = styled.button`
  background: none;
  border: 2px solid #2e7d32;
  color: #2e7d32;
  padding: 0.8rem 1.5rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;

  &:hover {
    background: #2e7d32;
    color: white;
  }
`;

const SubcategoryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
`;

const SubcategoryTag = styled.div`
  background: ${props => props.bgColor || '#f0f8f0'};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  color: #333;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const categories = [
  {
    id: 1,
    title: "Farm Machinery",
    description: "From Big Farm Machineries to Farm Cutter Accessories, We've got everything that you need on your farm",
    icon: FaTractor,
    bgColor: "#fff5e6",
    subcategories: ["Special Farm Tools", "Garden Tools", "Landscaping", "Brush Cutter", "Sprayers", "Cultivator | Tiller | Weeder"]
  },
  {
    id: 2,
    title: "Pumps & Motors",
    description: "From Pumps, Compressors, to Accessories, We've got everything that helps irrigation for your business.",
    icon: FaIndustry,
    bgColor: "#e6fff0",
    subcategories: ["Compressor", "Construction Equipment", "Pneumatic Tools", "Power Tools", "Garage | Hand Tools", "Welding"]
  },
  {
    id: 3,
    title: "Food Machinery",
    description: "From Big Food Processing Machineries to Food Packaging Tools, We've got everything that is designed to be mess-free.",
    icon: FaBlender,
    bgColor: "#e6f0ff",
    subcategories: ["Food Packaging Tools", "Grinder/Milling", "Dairy Equipment", "Beverages & Ice-Cream Equipment", "Food Cutting Machine", "Dehusking Peeling"]
  },
  {
    id: 4,
    title: "Workshop Tools",
    description: "From Power Tools to Safety Tools, We've got everything that increases your productivity.",
    icon: FaTools,
    bgColor: "#ffe6e6",
    subcategories: ["Power Tools", "Hand Tools", "Safety Equipment", "Measuring Tools", "Storage Solutions", "Workbenches"]
  }
];

const ProductList = () => {
  return (
    <ProductSection>
      <CategoryGrid>
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <CategoryCard key={category.id} bgColor={category.bgColor}>
              <CategoryIcon>
                <Icon />
              </CategoryIcon>
              <CategoryTitle>{category.title}</CategoryTitle>
              <CategoryDescription>{category.description}</CategoryDescription>
              <ShopNowButton>
                SHOP NOW
                <FaArrowRight />
              </ShopNowButton>
              <SubcategoryList>
                {category.subcategories.slice(0, 3).map((subcategory, index) => (
                  <SubcategoryTag key={index} bgColor={`${category.bgColor}99`}>
                    {subcategory}
                  </SubcategoryTag>
                ))}
              </SubcategoryList>
            </CategoryCard>
          );
        })}
      </CategoryGrid>
    </ProductSection>
  );
};

export default ProductList; 