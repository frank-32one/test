import { Link } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const categories = [
  {
    id: 'photography',
    name: 'Photography',
    description: 'Professional photographers for your events',
    icon: '📸',
    href: '/browse?category=photography',
  },
  {
    id: 'catering',
    name: 'Catering',
    description: 'Delicious food and beverages for your guests',
    icon: '🍽️',
    href: '/browse?category=catering',
  },
  {
    id: 'decoration',
    name: 'Decoration',
    description: 'Beautiful decorations to transform your venue',
    icon: '🎨',
    href: '/browse?category=decoration',
  },
  {
    id: 'entertainment',
    name: 'Entertainment',
    description: 'Music, DJs, and performers for your event',
    icon: '🎵',
    href: '/browse?category=entertainment',
  },
];

const steps = [
  {
    id: 1,
    title: 'Browse Services',
    description: 'Explore our curated list of service providers',
  },
  {
    id: 2,
    title: 'Compare Options',
    description: 'View profiles, reviews, and pricing',
  },
  {
    id: 3,
    title: 'Book & Pay',
    description: 'Secure booking and payment process',
  },
];

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Find the perfect service providers for your event
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Connect with trusted professionals for photography, catering, decoration, and more.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <div className="relative flex-1">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input
                      type="text"
                      className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Search for services..."
                    />
                  </div>
                  <Link
                    to="/browse"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Browse All Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Featured Categories
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Discover our most popular service categories
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {categories.map((category) => (
            <div key={category.id} className="relative">
              <div className="flex items-center gap-x-4 text-xs font-semibold leading-6 text-gray-600">
                <span className="text-2xl">{category.icon}</span>
                {category.name}
              </div>
              <div className="group relative mt-2">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                  <Link to={category.href} className="hover:text-indigo-600">
                    <span className="absolute inset-0" />
                    {category.name}
                  </Link>
                </h3>
                <p className="mt-5 text-sm leading-6 text-gray-600">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Simple steps to book your service providers
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white">
                    {step.id}
                  </span>
                  {step.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{step.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
} 