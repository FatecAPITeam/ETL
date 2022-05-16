import axios from 'axios';

class PromRequest {
  public async execute(query: string) {
    const response = await axios.get(
      `https://prometheus.herokuapp.com/api/v1/query?query=${query}`,
    );

    return response.data.data.result;
  }
}

export { PromRequest };
