import axios from 'axios';

export class User{
    first_name: string;
    last_name: string;
    age: Number;
    phone_number: Number;
    adderss: string;
}

export class ExampleService { 
  private static config = {
    apiEndpoint: '',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  public static forRoot(endpoint: string) {
    this.config.apiEndpoint = endpoint;
  }

  public static GetUser(): PromiseLike<any> {
    return axios.get(`${this.config.apiEndpoint}/users/1`,
      { headers: this.config.headers })
      .then(x => x.data as User)
      .catch((error: any) => error.response.data.ExceptionMessage);
  }
}
