import { Box, Flex } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const FilterData = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [gender, setGender] = useState(searchParams.getAll('gender') || []);
  const [category, setCategory] = useState(searchParams.getAll('category') || []);
  const [order, setOrder] = useState(searchParams.get('order') || '');

  const handleGender = (e) => {
    const { value } = e.target;
    let newGender = [...gender];
    if (newGender.includes(value)) {
      newGender = newGender.filter((el) => el !== value);
    } else {
      newGender.push(value);
    }
    setGender(newGender);
  };

  const handleCategory = (e) => {
    const { value } = e.target;
    let newCategory = [...category];
    if (newCategory.includes(value)) {
      newCategory = newCategory.filter((el) => el !== value);
    } else {
      newCategory.push(value);
    }
    setCategory(newCategory);
  };

  const handlePrice = (e) => {
    const { value } = e.target;
    setOrder(value);
  };

  useEffect(() => {
    let params = {
      gender: gender,
      category: category,
    };
    order && (params.order = order);
    setSearchParams(params);
  }, [gender, category, order, setSearchParams]);


  return (
    <Flex top="56.1px" justifyContent="space-between">
      <Box w="229.2px" h="166px" top="142px" borderRadius="8px" >
        <h3 className="text-lg font-semibold mb-2">Filter By Gender</h3>
        <select
          styles={{ height: "51.8px", top: "142px", left: "291px", border: "2px", padding: "0px 12px 0px 12px", gap: "8px", borderColor: "rgba(121, 73, 255, 1)" }}
          value={gender}
          onChange={handleGender}
        >
          <option value="male">Men</option>
          <option value="female">Women</option>
        </select>
      </Box>

      <Box w="229.2px" h="166px" top="142px" borderRadius="8px" >
        <h3 className="text-lg font-semibold mb-2">Filter By Category</h3>
        <select
          styles={{ height: "51.8px", top: "142px", left: "291px", border: "2px", padding: "0px 12px 0px 12px", gap: "8px", borderColor: "rgba(121, 73, 255, 1)" }}
          value={category}
          onChange={handleCategory}
        >
          <option value="makeup">Makeup</option>
          <option value="skincare">Skincare</option>
          <option value="haircare">Haircare</option>
        </select>
      </Box>

      <Box w="229.2px" h="166px" top="142px" borderRadius="8px" >
        <h3>Sort By Price</h3>
        <select
          value={order}
          onChange={handlePrice}
          styles={{ height: "51.8px", top: "142px", left: "291px", border: "2px", padding: "0px 12px 0px 12px", gap: "8px", borderColor: "rgba(121, 73, 255, 1)" }}
        >
          <option value="">Select</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </Box>
      
    </Flex>
  );
};

export default FilterData;
