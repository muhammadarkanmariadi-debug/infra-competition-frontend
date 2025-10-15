import {
  UsersIcon,
  DocumentTextIcon,
  LinkIcon,
  FlagIcon,
} from '@heroicons/react/24/outline'
import Layout from './components/layout'

const stats = [
  { name: 'Total Users', value: '1,234', icon: UsersIcon, color: 'bg-blue-100 text-blue-600' },
  { name: 'New Posts', value: '56', icon: DocumentTextIcon, color: 'bg-green-100 text-green-600' },
  { name: 'Links Created', value: '789', icon: LinkIcon, color: 'bg-purple-100 text-purple-600' },
  { name: 'Aspirations', value: '23', icon: FlagIcon, color: 'bg-orange-100 text-orange-600' },
]

const recentActivity = [
  { id: 1, type: 'New post created', user: 'Admin', time: '3 hours ago' },
  { id: 2, type: 'New user registered', user: 'John Doe', time: '4 hours ago' },
  { id: 3, type: 'Form submission received', user: 'Contact Form', time: '5 hours ago' },
]

export default function Dashboard() {
  return (
    <Layout>
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Halo, Bro 
              <span className="inline-block ml-2">👋</span>
            </h1>
            <p className="text-gray-600">Here's whats going on today</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => (
              <div key={stat.name} className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <span className="text-sm text-gray-500">Today</span>
                </div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.name}</div>
              </div>
            ))}
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{activity.type}</p>
                      <p className="text-sm text-gray-500">{activity.user} • {activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}