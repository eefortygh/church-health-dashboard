'use client'

import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { ChevronDown, TrendingUp, TrendingDown, Users, DollarSign, Heart, UserPlus, Calendar, MessageSquare } from 'lucide-react';

export default function ChurchDashboard() {
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [selectedTimeframe, setSelectedTimeframe] = useState('Last 12 Weeks');

  // Sample data for multiple locations
  const locations = ['All Locations', 'Main Campus', 'North Campus', 'South Campus', 'Online Campus'];
  
  const weeklyData = [
    { week: 'Week 1', giving: 12500, adults: 285, volunteers: 45, kids: 95, decisions: 3, newMembers: 8 },
    { week: 'Week 2', giving: 11800, adults: 270, volunteers: 42, kids: 88, decisions: 2, newMembers: 5 },
    { week: 'Week 3', giving: 13200, adults: 295, volunteers: 48, kids: 102, decisions: 5, newMembers: 12 },
    { week: 'Week 4', giving: 14100, adults: 310, volunteers: 52, kids: 108, decisions: 4, newMembers: 9 },
    { week: 'Week 5', giving: 12900, adults: 288, volunteers: 46, kids: 94, decisions: 3, newMembers: 7 },
    { week: 'Week 6', giving: 13800, adults: 305, volunteers: 50, kids: 105, decisions: 6, newMembers: 14 },
    { week: 'Week 7', giving: 15200, adults: 325, volunteers: 55, kids: 115, decisions: 7, newMembers: 11 },
    { week: 'Week 8', giving: 13600, adults: 298, volunteers: 49, kids: 99, decisions: 4, newMembers: 8 },
    { week: 'Week 9', giving: 14500, adults: 318, volunteers: 53, kids: 112, decisions: 5, newMembers: 10 },
    { week: 'Week 10', giving: 12200, adults: 275, volunteers: 44, kids: 86, decisions: 2, newMembers: 6 },
    { week: 'Week 11', giving: 16800, adults: 340, volunteers: 58, kids: 125, decisions: 8, newMembers: 16 },
    { week: 'Week 12', giving: 15900, adults: 332, volunteers: 56, kids: 118, decisions: 6, newMembers: 13 }
  ];

  // Calculate total attendance for each week
  const weeklyDataWithTotals = weeklyData.map(week => ({
    ...week,
    totalAttendance: week.adults + week.volunteers + week.kids
  }));

  // Calculate 12-week averages
  const calculate12WeekAverage = (dataArray, field) => {
    const sum = dataArray.reduce((acc, week) => acc + week[field], 0);
    return sum / dataArray.length;
  };

  const averages = {
    giving: calculate12WeekAverage(weeklyData, 'giving'),
    adults: calculate12WeekAverage(weeklyData, 'adults'),
    volunteers: calculate12WeekAverage(weeklyData, 'volunteers'),
    kids: calculate12WeekAverage(weeklyData, 'kids'),
    decisions: calculate12WeekAverage(weeklyData, 'decisions'),
    newMembers: calculate12WeekAverage(weeklyData, 'newMembers'),
    totalAttendance: calculate12WeekAverage(weeklyDataWithTotals, 'totalAttendance')
  };

  const locationBreakdown = [
    { name: 'Main Campus', attendance: 180, giving: 8500, color: '#8884d8' },
    { name: 'North Campus', attendance: 95, giving: 4200, color: '#82ca9d' },
    { name: 'South Campus', attendance: 87, giving: 3800, color: '#ffc658' },
    { name: 'Online Campus', attendance: 165, giving: 2400, color: '#ff7300' }
  ];

  // Sample data for attendance by location over time
  const attendanceByLocationData = [
    { week: 'Week 1', mainCampus: 168, northCampus: 89, southCampus: 82, onlineCampus: 143 },
    { week: 'Week 2', mainCampus: 162, northCampus: 85, southCampus: 78, onlineCampus: 135 },
    { week: 'Week 3', mainCampus: 175, northCampus: 95, southCampus: 88, onlineCampus: 157 },
    { week: 'Week 4', mainCampus: 184, northCampus: 102, southCampus: 92, onlineCampus: 162 },
    { week: 'Week 5', mainCampus: 172, northCampus: 92, southCampus: 85, onlineCampus: 149 },
    { week: 'Week 6', mainCampus: 182, northCampus: 98, southCampus: 91, onlineCampus: 169 },
    { week: 'Week 7', mainCampus: 195, northCampus: 108, southCampus: 97, onlineCampus: 175 },
    { week: 'Week 8', mainCampus: 178, northCampus: 96, southCampus: 87, onlineCampus: 155 },
    { week: 'Week 9', mainCampus: 189, northCampus: 104, southCampus: 94, onlineCampus: 168 },
    { week: 'Week 10', mainCampus: 155, northCampus: 82, southCampus: 76, onlineCampus: 132 },
    { week: 'Week 11', mainCampus: 205, northCampus: 118, southCampus: 105, onlineCampus: 195 },
    { week: 'Week 12', mainCampus: 195, northCampus: 112, southCampus: 98, onlineCampus: 181 }
  ];

  // Sample data for giving by location over time  
  const givingByLocationData = [
    { week: 'Week 1', mainCampus: 7200, northCampus: 2800, southCampus: 1900, onlineCampus: 600 },
    { week: 'Week 2', mainCampus: 6800, northCampus: 2600, southCampus: 1800, onlineCampus: 600 },
    { week: 'Week 3', mainCampus: 7600, northCampus: 3100, southCampus: 2000, onlineCampus: 500 },
    { week: 'Week 4', mainCampus: 8100, northCampus: 3300, southCampus: 2100, onlineCampus: 600 },
    { week: 'Week 5', mainCampus: 7400, northCampus: 2900, southCampus: 1950, onlineCampus: 650 },
    { week: 'Week 6', mainCampus: 7900, northCampus: 3200, southCampus: 2000, onlineCampus: 700 },
    { week: 'Week 7', mainCampus: 8700, northCampus: 3600, southCampus: 2200, onlineCampus: 700 },
    { week: 'Week 8', mainCampus: 7800, northCampus: 3100, southCampus: 2000, onlineCampus: 700 },
    { week: 'Week 9', mainCampus: 8300, northCampus: 3400, southCampus: 2100, onlineCampus: 700 },
    { week: 'Week 10', mainCampus: 7000, northCampus: 2700, southCampus: 1800, onlineCampus: 700 },
    { week: 'Week 11', mainCampus: 9600, northCampus: 4000, southCampus: 2400, onlineCampus: 800 },
    { week: 'Week 12', mainCampus: 9100, northCampus: 3800, southCampus: 2300, onlineCampus: 700 }
  ];

  const currentWeekStats = {
    totalGiving: 15900,
    totalAttendance: 332, // adults only
    totalVolunteers: 56,
    totalKids: 118,
    totalDecisions: 6,
    totalNewMembers: 13,
    totalAllAttendance: 332 + 56 + 118, // adults + volunteers + kids
    royalKidsPercent: ((118) / (332 + 56 + 118)) * 100, // kids / total attendance
    altarDecisionsPercent: ((6) / (332 + 56 + 118)) * 100 // decisions / total attendance
  };

  const previousWeekStats = {
    totalGiving: 16800,
    totalAttendance: 340, // adults only
    totalVolunteers: 58,
    totalKids: 125,
    totalDecisions: 8,
    totalNewMembers: 16,
    totalAllAttendance: 340 + 58 + 125, // adults + volunteers + kids
    royalKidsPercent: ((125) / (340 + 58 + 125)) * 100, // kids / total attendance
    altarDecisionsPercent: ((8) / (340 + 58 + 125)) * 100 // decisions / total attendance
  };

  const calculateChange = (current, previous) => {
    const change = ((current - previous) / previous) * 100;
    let color = '';
    let bgColor = '';
    
    if (change > 10) {
      color = 'text-green-600';
      bgColor = 'bg-green-100';
    } else if (change > 0) {
      color = 'text-blue-600';
      bgColor = 'bg-blue-100';
    } else if (change >= -10) {
      color = 'text-yellow-600';
      bgColor = 'bg-yellow-100';
    } else {
      color = 'text-red-600';
      bgColor = 'bg-red-100';
    }
    
    return { 
      value: Math.abs(change).toFixed(1), 
      isPositive: change >= 0,
      color: color,
      bgColor: bgColor,
      rawChange: change
    };
  };

  const StatCard = ({ title, current, previous, icon: Icon, color, prefix = '', suffix = '', average = null }) => {
    const change = calculateChange(current, previous);
    return (
      <div className="bg-white p-6 rounded-lg shadow-md border">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-full ${color}`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className={`flex items-center text-sm font-medium px-3 py-1 rounded-full ${change.color} ${change.bgColor}`}>
            {change.isPositive ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
            {change.isPositive ? '+' : '-'}{change.value}%
          </div>
        </div>
        <h3 className="text-lg font-semibold text-gray-700 mb-1">{title}</h3>
        <p className={`text-3xl font-bold ${change.color}`}>{prefix}{current.toLocaleString()}{suffix}</p>
        <p className="text-sm text-gray-500 mt-1">vs. last week: {prefix}{previous.toLocaleString()}{suffix}</p>
        {average !== null && (
          <p className="text-xs text-gray-400 mt-1">12-week avg: {prefix}{Math.round(average).toLocaleString()}{suffix}</p>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Church Health Dashboard</h1>
          <p className="text-gray-600">Multi-location insights and trends</p>
        </div>

        {/* Filters */}
        <div className="flex gap-4 mb-8">
          <div className="relative">
            <select 
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
          <div className="relative">
            <select 
              value={selectedTimeframe}
              onChange={(e) => setSelectedTimeframe(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Last 4 Weeks</option>
              <option>Last 12 Weeks</option>
              <option>Last 6 Months</option>
              <option>Last Year</option>
            </select>
            <ChevronDown className="absolute right-2 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <StatCard
            title="Weekly Giving"
            current={currentWeekStats.totalGiving}
            previous={previousWeekStats.totalGiving}
            icon={DollarSign}
            color="bg-green-500"
            prefix="$"
            average={averages.giving}
          />
          <StatCard
            title="Total Attendance"
            current={currentWeekStats.totalAllAttendance}
            previous={previousWeekStats.totalAllAttendance}
            icon={Users}
            color="bg-slate-600"
            average={averages.totalAttendance}
          />
          <StatCard
            title="Adult Attendance"
            current={currentWeekStats.totalAttendance}
            previous={previousWeekStats.totalAttendance}
            icon={Users}
            color="bg-blue-500"
            average={averages.adults}
          />
          <StatCard
            title="Volunteers"
            current={currentWeekStats.totalVolunteers}
            previous={previousWeekStats.totalVolunteers}
            icon={Heart}
            color="bg-purple-500"
            average={averages.volunteers}
          />
          <StatCard
            title="Kids Attendance"
            current={currentWeekStats.totalKids}
            previous={previousWeekStats.totalKids}
            icon={Users}
            color="bg-orange-500"
            average={averages.kids}
          />
          <StatCard
            title="Altar Decisions"
            current={currentWeekStats.totalDecisions}
            previous={previousWeekStats.totalDecisions}
            icon={Heart}
            color="bg-red-500"
            average={averages.decisions}
          />
          <StatCard
            title="New Members"
            current={currentWeekStats.totalNewMembers}
            previous={previousWeekStats.totalNewMembers}
            icon={UserPlus}
            color="bg-indigo-500"
            average={averages.newMembers}
          />
          <StatCard
            title="Royal Kids %"
            current={parseFloat(currentWeekStats.royalKidsPercent.toFixed(1))}
            previous={parseFloat(previousWeekStats.royalKidsPercent.toFixed(1))}
            icon={Users}
            color="bg-pink-500"
            suffix="%"
          />
          <StatCard
            title="Altar Decisions %"
            current={parseFloat(currentWeekStats.altarDecisionsPercent.toFixed(1))}
            previous={parseFloat(previousWeekStats.altarDecisionsPercent.toFixed(1))}
            icon={Heart}
            color="bg-emerald-500"
            suffix="%"
          />
        </div>

        {/* Charts Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Giving Trends */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Giving Trends</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Giving']} />
                <Line type="monotone" dataKey="giving" stroke="#10b981" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Attendance Trends */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Attendance Trends</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={weeklyDataWithTotals}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="totalAttendance" stroke="#1f2937" strokeWidth={3} name="Total Attendance" />
                <Line type="monotone" dataKey="adults" stroke="#3b82f6" strokeWidth={2} name="Adults" />
                <Line type="monotone" dataKey="kids" stroke="#f59e0b" strokeWidth={2} name="Kids" />
                <Line type="monotone" dataKey="volunteers" stroke="#8b5cf6" strokeWidth={2} name="Volunteers" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Charts Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Location Breakdown */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Week Attendance by Location</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={locationBreakdown}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="attendance"
                >
                  {locationBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Ministry Impact */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Ministry Impact</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={weeklyDataWithTotals}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="decisions" fill="#ef4444" name="Altar Decisions" />
                <Bar dataKey="newMembers" fill="#6366f1" name="New Members" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Attendance by Location Over Time */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Total Attendance by Location Over Time</h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={attendanceByLocationData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="mainCampus" stackId="a" fill="#8884d8" name="Main Campus" />
              <Bar dataKey="northCampus" stackId="a" fill="#82ca9d" name="North Campus" />
              <Bar dataKey="southCampus" stackId="a" fill="#ffc658" name="South Campus" />
              <Bar dataKey="onlineCampus" stackId="a" fill="#ff7300" name="Online Campus" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Weekly Giving by Location Over Time */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Giving by Location Over Time</h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={givingByLocationData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`} />
              <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, '']} />
              <Legend />
              <Bar dataKey="mainCampus" stackId="b" fill="#16a34a" name="Main Campus" />
              <Bar dataKey="northCampus" stackId="b" fill="#22c55e" name="North Campus" />
              <Bar dataKey="southCampus" stackId="b" fill="#4ade80" name="South Campus" />
              <Bar dataKey="onlineCampus" stackId="b" fill="#86efac" name="Online Campus" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Insights Panel */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Insights & Recommendations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">📈 Positive Trends</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Week 11 showed exceptional growth (16.8K giving, 340 attendance)</li>
                <li>• Consistent volunteer engagement (44-58 weekly)</li>
                <li>• Strong kids ministry participation (86-125 weekly)</li>
                <li>• New member integration averaging 9.5 per week</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">⚠️ Areas for Attention</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Recent dip in attendance and giving (Week 12 vs 11)</li>
                <li>• Week 10 showed significant drops across metrics</li>
                <li>• Altar decisions fluctuate (2-8 weekly range)</li>
                <li>• Online giving lower per capita than physical locations</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Qualitative Feedback */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <MessageSquare className="w-5 h-5 text-blue-500 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Attendance Insights</h3>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="text-sm font-medium text-gray-900">Main Campus</p>
                <p className="text-sm text-gray-600">"Holiday season affecting consistency. Youth event drew many families back."</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <p className="text-sm font-medium text-gray-900">North Campus</p>
                <p className="text-sm text-gray-600">"New small group launch increased mid-week engagement and Sunday retention."</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <p className="text-sm font-medium text-gray-900">South Campus</p>
                <p className="text-sm text-gray-600">"Weather impacts attendance. Considering live-stream improvements."</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <DollarSign className="w-5 h-5 text-green-500 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Giving Insights</h3>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <p className="text-sm font-medium text-gray-900">Overall Trend</p>
                <p className="text-sm text-gray-600">"End-year giving surge as expected. Strong stewardship series impact visible."</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="text-sm font-medium text-gray-900">Digital Giving</p>
                <p className="text-sm text-gray-600">"Online giving platform showing 23% increase. Mobile app adoption growing."</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <p className="text-sm font-medium text-gray-900">Special Offerings</p>
                <p className="text-sm text-gray-600">"Building fund campaign resonating well. Christmas offering exceeded goal by 15%."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div