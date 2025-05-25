import { Profile } from '../types/profile';

export const profiles: Profile[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    photo: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Software Engineer with 5 years of experience in React and Node.js',
    address: {
      street: '123 Tech Lane',
      city: 'San Francisco',
      state: 'CA',
      zip: '94105',
      country: 'USA',
      coordinates: {
        lat: 37.7749,
        lng: -122.4194
      }
    },
    phone: '(555) 123-4567',
    email: 'alex.johnson@example.com',
    website: 'alexjohnson.dev',
    company: 'TechCorp',
    jobTitle: 'Senior Developer',
    interests: ['Hiking', 'Photography', 'Machine Learning'],
    skills: ['JavaScript', 'React', 'Node.js', 'TypeScript']
  },
  {
    id: '2',
    name: 'Sophia Garcia',
    photo: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'UX Designer focused on creating intuitive user experiences',
    address: {
      street: '456 Design Ave',
      city: 'New York',
      state: 'NY',
      zip: '10001',
      country: 'USA',
      coordinates: {
        lat: 40.7128,
        lng: -74.0060
      }
    },
    phone: '(555) 234-5678',
    email: 'sophia.garcia@example.com',
    company: 'Creative Designs',
    jobTitle: 'Lead UX Designer',
    interests: ['Art', 'Travel', 'Music'],
    skills: ['UI/UX', 'Figma', 'Adobe XD', 'Sketch']
  },
  {
    id: '3',
    name: 'Marcus Williams',
    photo: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Data Scientist specializing in AI and machine learning applications',
    address: {
      street: '789 Data Drive',
      city: 'Seattle',
      state: 'WA',
      zip: '98101',
      country: 'USA',
      coordinates: {
        lat: 47.6062,
        lng: -122.3321
      }
    },
    phone: '(555) 345-6789',
    email: 'marcus.williams@example.com',
    website: 'marcuswilliams.ai',
    company: 'DataMind',
    jobTitle: 'Principal Data Scientist',
    interests: ['AI Ethics', 'Robotics', 'Chess'],
    skills: ['Python', 'TensorFlow', 'PyTorch', 'Statistics']
  },
  {
    id: '4',
    name: 'Emma Chen',
    photo: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Product Manager with experience in fintech and e-commerce',
    address: {
      street: '101 Product Road',
      city: 'Austin',
      state: 'TX',
      zip: '73301',
      country: 'USA',
      coordinates: {
        lat: 30.2672,
        lng: -97.7431
      }
    },
    phone: '(555) 456-7890',
    email: 'emma.chen@example.com',
    company: 'ProductHub',
    jobTitle: 'Senior Product Manager',
    interests: ['Rock Climbing', 'Reading', 'Cooking'],
    skills: ['Product Strategy', 'Agile', 'Market Research', 'Analytics']
  },
  {
    id: '5',
    name: 'James Wilson',
    photo: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'DevOps Engineer focused on cloud infrastructure and automation',
    address: {
      street: '202 Cloud Street',
      city: 'Portland',
      state: 'OR',
      zip: '97201',
      country: 'USA',
      coordinates: {
        lat: 45.5152,
        lng: -122.6784
      }
    },
    phone: '(555) 567-8901',
    email: 'james.wilson@example.com',
    company: 'CloudTech',
    jobTitle: 'DevOps Lead',
    interests: ['Cycling', 'Homebrewing', 'Open Source'],
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD']
  },
  {
    id: '6',
    name: 'Olivia Martinez',
    photo: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Marketing Specialist with a focus on digital strategy',
    address: {
      street: '303 Marketing Blvd',
      city: 'Chicago',
      state: 'IL',
      zip: '60601',
      country: 'USA',
      coordinates: {
        lat: 41.8781,
        lng: -87.6298
      }
    },
    phone: '(555) 678-9012',
    email: 'olivia.martinez@example.com',
    company: 'MarketBoost',
    jobTitle: 'Digital Marketing Director',
    interests: ['Social Media', 'Writing', 'Yoga'],
    skills: ['SEO', 'Content Strategy', 'Analytics', 'Campaign Management']
  }
];