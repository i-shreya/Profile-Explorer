export interface Profile {
  id: string;
  name: string;
  photo: string;
  description: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  phone: string;
  email: string;
  website?: string;
  company?: string;
  jobTitle?: string;
  interests?: string[];
  skills?: string[];
}