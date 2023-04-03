import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { products } from './mock-data.js';

const getProductById = async (event) => {
  try {
    const product = products.find(item => item.id === event.pathParameters.productId);
    
    if (product) {
      return formatJSONResponse({
        product,
      });
    } else {
      throw "Not found. Please check id"
    }
  } catch(e) {
    return formatJSONResponse({
      message: e,
      statusCode: 404,
    });
  }
};

export const main = middyfy(getProductById);
