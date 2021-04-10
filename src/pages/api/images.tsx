import { NextApiRequest, NextApiResponse } from "next";

import { unsplash } from '../../services/api';

interface IPhoto {
  results: {
    urls: {
      regular: string;
    };
  }[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query } = req.query;

  try {
    const { data: { results } } = await unsplash.get<IPhoto>(`search/photos?page=1&query=${query}&orientation=landscape&per_page=12`);

    const result = results.map(({ urls: { regular } }) => regular);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(204).json([]);
  }
}
