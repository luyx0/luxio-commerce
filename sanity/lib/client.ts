import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: "skgekoBYdctbVkgMHMkzBywtoDyVnndFptTKzOZteiJOGdQQW5t3iN06GRlLSgXhpCKQh2iya0Rtz0jY5KrQd01dl6jOlnYM3dMjNTKDGrBFnUuXYSUjCAaPtjcsR8ithCqsECMtV1l0nsTPbaXLI0odE89upyyA1qamNU8iCU9ALq45zmyO"
})
