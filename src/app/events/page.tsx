import EventsClient from './events-client';

export default function Events() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <div className="relative h-[300px] lg:h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transform hover:scale-105 transition-transform duration-700"
          style={{
            backgroundImage: "url('/images/events-hero.jpg')"
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative h-full flex flex-col justify-center max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
          <h1 className="text-white text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 text-shadow-lg animate-fadeIn">
            Events & Community Meetings
          </h1>
          <p className="text-white text-lg lg:text-xl text-shadow-md animate-slideUp">
            Stay connected with Reform UK Erdington Branch's activities across Erdington, Castle Vale, Pype Hayes, Stockland Green, and Kingstanding. Whether you're interested in national reform campaigns or local initiatives, find the perfect way to get involved and help deliver our Contract with You.
          </p>
        </div>
      </div>

      {/* Events Links */}
      <div className="py-12">
        <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white animate-fadeIn">Upcoming Events in Erdington</h2>
          <p className="text-center text-lg mb-12 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fadeIn">
            Join us at our upcoming events across Erdington, Castle Vale, Pype Hayes, and surrounding areas. Meet like-minded people, discuss local issues, and help shape the future of our community.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* National Events Card */}
            <div className="group relative overflow-hidden rounded-xl shadow-[0_4px_20px_rgba(0,190,214,0.2)] hover:shadow-[0_8px_30px_rgba(0,190,214,0.4)] transition-all duration-500 transform hover:-translate-y-2 animate-slideInLeft">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00BED6] via-[#00B0C7] to-[#009FB5] opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 animate-shimmer"></div>
              <div className="relative z-10 p-8">
                <h3 className="text-white text-2xl font-bold mb-4">National Events</h3>
                <p className="text-white mb-6">
                  Stay connected with ReformUK's national campaign events, conferences, and rallies. Join us in shaping the future of British politics.
                </p>
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 transform group-hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-xl">
                  <a
                    href="https://www.eventbrite.co.uk/o/reform-uk-51817792123"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center text-[#00BED6] hover:text-[#008299] transition-colors duration-300"
                  >
                    View all ReformUK national events on Eventbrite
                  </a>
                </div>
              </div>
            </div>

            {/* Regional Events Card */}
            <div className="group relative overflow-hidden rounded-xl shadow-[0_4px_20px_rgba(0,190,214,0.2)] hover:shadow-[0_8px_30px_rgba(0,190,214,0.4)] transition-all duration-500 transform hover:-translate-y-2 animate-slideInRight">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00BED6] via-[#00B0C7] to-[#009FB5] opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 animate-shimmer"></div>
              <div className="relative z-10 p-8">
                <h3 className="text-white text-2xl font-bold mb-4">Regional Events</h3>
                <p className="text-white mb-6">
                  Connect with fellow reformers in Erdington and surrounding areas. Get involved in local initiatives, community meetings, and grassroots campaigns.
                </p>
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 transform group-hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-xl">
                  <a
                    href="https://www.facebook.com/groups/916932353577131"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center text-[#00BED6] hover:text-[#008299] transition-colors duration-300"
                  >
                    Join our Facebook group for local events
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Events List */}
      <div className="py-12">
        <div className="max-w-[2000px] mx-auto">
          <EventsClient />
        </div>
      </div>
    </div>
  );
}
