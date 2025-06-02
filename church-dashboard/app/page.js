'use client'

import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import {
  ChevronDown,
  TrendingUp,
  TrendingDown,
  Users,
  DollarSign,
  Heart,
  UserPlus,
  Calendar,
  MessageSquare
} from 'lucide-react';

export default function ChurchDashboard() {
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [selectedTimeframe, setSelectedTimeframe] = useState('Last 12 Weeks');

  // All locations
  const locations = [
    'All Locations',
    'Mountain View',
    'San Jose',
    'San Francisco',
    'Oakland',
    'Rome',
    'Milan',
    'Modena',
    'Chicago',
    'Honolulu',
    'Dubai',
    'Saigon',
    'London',
    'West London',
    'Madrid',
    'Frankfurt'
  ];

  // Sample data with location breakdown for each week
  const allLocationWeeklyData = [
    {
      week: 'Week 1',
      mountainView: { giving: 7200, adults: 168, volunteers: 25, kids: 65, decisions: 1, newMembers: 3 },
      sanJose: { giving: 6800, adults: 162, volunteers: 22, kids: 58, decisions: 1, newMembers: 2 },
      sanFrancisco: { giving: 6200, adults: 142, volunteers: 20, kids: 52, decisions: 0, newMembers: 2 },
      oakland: { giving: 4800, adults: 122, volunteers: 18, kids: 45, decisions: 1, newMembers: 1 },
      rome: { giving: 3800, adults: 108, volunteers: 15, kids: 38, decisions: 0, newMembers: 0 },
      milan: { giving: 3200, adults: 92, volunteers: 12, kids: 32, decisions: 0, newMembers: 1 },
      modena: { giving: 2400, adults: 72, volunteers: 10, kids: 25, decisions: 0, newMembers: 0 },
      chicago: { giving: 8200, adults: 195, volunteers: 30, kids: 75, decisions: 2, newMembers: 4 },
      honolulu: { giving: 2800, adults: 82, volunteers: 12, kids: 28, decisions: 0, newMembers: 1 },
      dubai: { giving: 5200, adults: 118, volunteers: 18, kids: 42, decisions: 1, newMembers: 2 },
      saigon: { giving: 4200, adults: 132, volunteers: 20, kids: 48, decisions: 1, newMembers: 2 },
      london: { giving: 7800, adults: 185, volunteers: 28, kids: 68, decisions: 1, newMembers: 3 },
      westLondon: { giving: 4400, adults: 112, volunteers: 16, kids: 38, decisions: 0, newMembers: 1 },
      madrid: { giving: 3600, adults: 102, volunteers: 14, kids: 35, decisions: 0, newMembers: 1 },
      frankfurt: { giving: 3200, adults: 88, volunteers: 12, kids: 30, decisions: 0, newMembers: 1 }
    },
    {
      week: 'Week 2',
      mountainView: { giving: 6800, adults: 162, volunteers: 24, kids: 62, decisions: 1, newMembers: 2 },
      sanJose: { giving: 6400, adults: 158, volunteers: 21, kids: 55, decisions: 0, newMembers: 1 },
      sanFrancisco: { giving: 5800, adults: 138, volunteers: 19, kids: 48, decisions: 1, newMembers: 1 },
      oakland: { giving: 4500, adults: 118, volunteers: 17, kids: 42, decisions: 0, newMembers: 1 },
      rome: { giving: 3600, adults: 105, volunteers: 14, kids: 35, decisions: 0, newMembers: 0 },
      milan: { giving: 3000, adults: 88, volunteers: 11, kids: 28, decisions: 0, newMembers: 0 },
      modena: { giving: 2200, adults: 70, volunteers: 9, kids: 22, decisions: 0, newMembers: 0 },
      chicago: { giving: 7800, adults: 192, volunteers: 28, kids: 70, decisions: 1, newMembers: 3 },
      honolulu: { giving: 2600, adults: 80, volunteers: 11, kids: 25, decisions: 0, newMembers: 0 },
      dubai: { giving: 4900, adults: 115, volunteers: 17, kids: 38, decisions: 0, newMembers: 1 },
      saigon: { giving: 3900, adults: 128, volunteers: 18, kids: 44, decisions: 1, newMembers: 1 },
      london: { giving: 7400, adults: 182, volunteers: 26, kids: 64, decisions: 1, newMembers: 2 },
      westLondon: { giving: 4100, adults: 108, volunteers: 15, kids: 35, decisions: 0, newMembers: 1 },
      madrid: { giving: 3300, adults: 98, volunteers: 13, kids: 32, decisions: 0, newMembers: 0 },
      frankfurt: { giving: 2900, adults: 85, volunteers: 11, kids: 28, decisions: 0, newMembers: 0 }
    },
    // ... continuing with more weeks (I'll provide a condensed version for brevity)
    {
      week: 'Week 11',
      mountainView: { giving: 9600, adults: 205, volunteers: 32, kids: 85, decisions: 3, newMembers: 6 },
      sanJose: { giving: 9200, adults: 195, volunteers: 30, kids: 78, decisions: 2, newMembers: 5 },
      sanFrancisco: { giving: 8600, adults: 175, volunteers: 28, kids: 72, decisions: 2, newMembers: 4 },
      oakland: { giving: 6800, adults: 155, volunteers: 24, kids: 62, decisions: 1, newMembers: 3 },
      rome: { giving: 5400, adults: 135, volunteers: 20, kids: 52, decisions: 1, newMembers: 2 },
      milan: { giving: 4700, adults: 120, volunteers: 18, kids: 45, decisions: 1, newMembers: 2 },
      modena: { giving: 3600, adults: 98, volunteers: 15, kids: 38, decisions: 0, newMembers: 1 },
      chicago: { giving: 11800, adults: 240, volunteers: 38, kids: 95, decisions: 4, newMembers: 8 },
      honolulu: { giving: 4100, adults: 108, volunteers: 16, kids: 42, decisions: 1, newMembers: 2 },
      dubai: { giving: 7500, adults: 150, volunteers: 24, kids: 58, decisions: 2, newMembers: 3 },
      saigon: { giving: 6100, adults: 165, volunteers: 26, kids: 62, decisions: 2, newMembers: 4 },
      london: { giving: 10800, adults: 225, volunteers: 35, kids: 88, decisions: 3, newMembers: 6 },
      westLondon: { giving: 6200, adults: 145, volunteers: 22, kids: 55, decisions: 1, newMembers: 3 },
      madrid: { giving: 5100, adults: 135, volunteers: 20, kids: 48, decisions: 1, newMembers: 2 },
      frankfurt: { giving: 4600, adults: 118, volunteers: 18, kids: 42, decisions: 1, newMembers: 2 }
    },
    {
      week: 'Week 12',
      mountainView: { giving: 9100, adults: 195, volunteers: 30, kids: 80, decisions: 2, newMembers: 5 },
      sanJose: { giving: 8700, adults: 185, volunteers: 28, kids: 75, decisions: 2, newMembers: 4 },
      sanFrancisco: { giving: 8100, adults: 165, volunteers: 26, kids: 68, decisions: 1, newMembers: 3 },
      oakland: { giving: 6400, adults: 145, volunteers: 22, kids: 58, decisions: 1, newMembers: 3 },
      rome: { giving: 5100, adults: 125, volunteers: 18, kids: 48, decisions: 1, newMembers: 2 },
      milan: { giving: 4400, adults: 110, volunteers: 16, kids: 42, decisions: 0, newMembers: 1 },
      modena: { giving: 3400, adults: 88, volunteers: 13, kids: 35, decisions: 0, newMembers: 1 },
      chicago: { giving: 11200, adults: 225, volunteers: 35, kids: 88, decisions: 3, newMembers: 7 },
      honolulu: { giving: 3900, adults: 98, volunteers: 14, kids: 38, decisions: 1, newMembers: 1 },
      dubai: { giving: 7100, adults: 140, volunteers: 22, kids: 52, decisions: 1, newMembers: 3 },
      saigon: { giving: 5700, adults: 155, volunteers: 24, kids: 58, decisions: 1, newMembers: 3 },
      london: { giving: 10200, adults: 215, volunteers: 32, kids: 82, decisions: 2, newMembers: 5 },
      westLondon: { giving: 5800, adults: 135, volunteers: 20, kids: 52, decisions: 1, newMembers: 2 },
      madrid: { giving: 4800, adults: 125, volunteers: 18, kids: 45, decisions: 1, newMembers: 2 },
      frankfurt: { giving: 4300, adults: 108, volunteers: 16, kids: 38, decisions: 0, newMembers: 1 }
    }
  ];

  // Helper function to get location key from display name
  const getLocationKey = (locationName) => {
    const keyMap = {
      'Mountain View': 'mountainView',
      'San Jose': 'sanJose',
      'San Francisco': 'sanFrancisco',
      'Oakland': 'oakland',
      'Rome': 'rome',
      'Milan': 'milan',
      'Modena': 'modena',
      'Chicago': 'chicago',
      'Honolulu': 'honolulu',
      'Dubai': 'dubai',
      'Saigon': 'saigon',
      'London': 'london',
      'West London': 'westLondon',
      'Madrid': 'madrid',
      'Frankfurt': 'frankfurt'
    };
    return keyMap[locationName];
  };

  // Function to get filtered data based on selected location and timeframe
  const getFilteredData = () => {
    // Generate complete historical data for all locations
    const generateCompleteData = () => {
      const completeData = [];

      // Generate 52 weeks of data (full year)
      for (let i = -51; i <= 0; i++) {
        const weekLabel = i === 0 ? 'Current Week' : `Week ${i}`;

        completeData.push({
          week: weekLabel,
          mountainView: {
            giving: Math.floor(7000 + Math.random() * 2000 + i * 15),
            adults: Math.floor(160 + Math.random() * 40 + i * 1.5),
            volunteers: Math.floor(22 + Math.random() * 8),
            kids: Math.floor(60 + Math.random() * 20),
            decisions: Math.floor(Math.random() * 3),
            newMembers: Math.floor(Math.random() * 4)
          },
          sanJose: {
            giving: Math.floor(6500 + Math.random() * 1800 + i * 14),
            adults: Math.floor(150 + Math.random() * 35 + i * 1.4),
            volunteers: Math.floor(20 + Math.random() * 7),
            kids: Math.floor(55 + Math.random() * 18),
            decisions: Math.floor(Math.random() * 3),
            newMembers: Math.floor(Math.random() * 4)
          },
          sanFrancisco: {
            giving: Math.floor(6000 + Math.random() * 1600 + i * 13),
            adults: Math.floor(140 + Math.random() * 30 + i * 1.3),
            volunteers: Math.floor(18 + Math.random() * 6),
            kids: Math.floor(50 + Math.random() * 16),
            decisions: Math.floor(Math.random() * 2),
            newMembers: Math.floor(Math.random() * 3)
          },
          oakland: {
            giving: Math.floor(4500 + Math.random() * 1200 + i * 10),
            adults: Math.floor(120 + Math.random() * 25 + i * 1),
            volunteers: Math.floor(16 + Math.random() * 5),
            kids: Math.floor(40 + Math.random() * 14),
            decisions: Math.floor(Math.random() * 2),
            newMembers: Math.floor(Math.random() * 3)
          },
          rome: {
            giving: Math.floor(3800 + Math.random() * 1000 + i * 8),
            adults: Math.floor(105 + Math.random() * 22 + i * 0.8),
            volunteers: Math.floor(13 + Math.random() * 4),
            kids: Math.floor(35 + Math.random() * 12),
            decisions: Math.floor(Math.random() * 2),
            newMembers: Math.floor(Math.random() * 2)
          },
          milan: {
            giving: Math.floor(3200 + Math.random() * 800 + i * 7),
            adults: Math.floor(90 + Math.random() * 18 + i * 0.7),
            volunteers: Math.floor(11 + Math.random() * 3),
            kids: Math.floor(30 + Math.random() * 10),
            decisions: Math.floor(Math.random() * 2),
            newMembers: Math.floor(Math.random() * 2)
          },
          modena: {
            giving: Math.floor(2500 + Math.random() * 600 + i * 5),
            adults: Math.floor(75 + Math.random() * 15 + i * 0.5),
            volunteers: Math.floor(9 + Math.random() * 3),
            kids: Math.floor(25 + Math.random() * 8),
            decisions: Math.floor(Math.random() * 1),
            newMembers: Math.floor(Math.random() * 2)
          },
          chicago: {
            giving: Math.floor(8000 + Math.random() * 2200 + i * 18),
            adults: Math.floor(190 + Math.random() * 45 + i * 1.8),
            volunteers: Math.floor(26 + Math.random() * 8),
            kids: Math.floor(70 + Math.random() * 22),
            decisions: Math.floor(Math.random() * 4),
            newMembers: Math.floor(Math.random() * 5)
          },
          honolulu: {
            giving: Math.floor(2800 + Math.random() * 700 + i * 6),
            adults: Math.floor(80 + Math.random() * 16 + i * 0.6),
            volunteers: Math.floor(10 + Math.random() * 3),
            kids: Math.floor(28 + Math.random() * 9),
            decisions: Math.floor(Math.random() * 2),
            newMembers: Math.floor(Math.random() * 2)
          },
          dubai: {
            giving: Math.floor(5000 + Math.random() * 1400 + i * 12),
            adults: Math.floor(115 + Math.random() * 28 + i * 1.2),
            volunteers: Math.floor(15 + Math.random() * 5),
            kids: Math.floor(40 + Math.random() * 13),
            decisions: Math.floor(Math.random() * 2),
            newMembers: Math.floor(Math.random() * 3)
          },
          saigon: {
            giving: Math.floor(4200 + Math.random() * 1100 + i * 9),
            adults: Math.floor(130 + Math.random() * 30 + i * 0.9),
            volunteers: Math.floor(17 + Math.random() * 5),
            kids: Math.floor(45 + Math.random() * 15),
            decisions: Math.floor(Math.random() * 3),
            newMembers: Math.floor(Math.random() * 3)
          },
          london: {
            giving: Math.floor(7500 + Math.random() * 2000 + i * 16),
            adults: Math.floor(175 + Math.random() * 42 + i * 1.6),
            volunteers: Math.floor(24 + Math.random() * 7),
            kids: Math.floor(65 + Math.random() * 20),
            decisions: Math.floor(Math.random() * 3),
            newMembers: Math.floor(Math.random() * 4)
          },
          westLondon: {
            giving: Math.floor(4300 + Math.random() * 1200 + i * 10),
            adults: Math.floor(110 + Math.random() * 25 + i * 1),
            volunteers: Math.floor(14 + Math.random() * 4),
            kids: Math.floor(38 + Math.random() * 12),
            decisions: Math.floor(Math.random() * 2),
            newMembers: Math.floor(Math.random() * 3)
          },
          madrid: {
            giving: Math.floor(3600 + Math.random() * 900 + i * 8),
            adults: Math.floor(95 + Math.random() * 20 + i * 0.8),
            volunteers: Math.floor(12 + Math.random() * 4),
            kids: Math.floor(32 + Math.random() * 10),
            decisions: Math.floor(Math.random() * 2),
            newMembers: Math.floor(Math.random() * 2)
          },
          frankfurt: {
            giving: Math.floor(3000 + Math.random() * 800 + i * 7),
            adults: Math.floor(85 + Math.random() * 18 + i * 0.7),
            volunteers: Math.floor(10 + Math.random() * 3),
            kids: Math.floor(28 + Math.random() * 9),
            decisions: Math.floor(Math.random() * 1),
            newMembers: Math.floor(Math.random() * 2)
          }
        });
      }

      return completeData;
    };

    const allWeeks = generateCompleteData();

    // Filter by timeframe
    let filteredWeeks;
    switch (selectedTimeframe) {
      case 'Last 4 Weeks':
        filteredWeeks = allWeeks.slice(-4);
        break;
      case 'Last 12 Weeks':
        filteredWeeks = allWeeks.slice(-12);
        break;
      case 'Last 6 Months':
        filteredWeeks = allWeeks.slice(-24); // ~6 months of weekly data
        break;
      case 'Last Year':
        filteredWeeks = allWeeks; // Full year of weekly data
        break;
      default:
        filteredWeeks = allWeeks.slice(-12);
    }

    if (selectedLocation === 'All Locations') {
      // Aggregate all locations
      return filteredWeeks.map((weekData) => {
        const aggregated = {
          week: weekData.week,
          giving: 0,
          adults: 0,
          volunteers: 0,
          kids: 0,
          decisions: 0,
          newMembers: 0
        };

        // Sum across all locations
        Object.keys(weekData).forEach((key) => {
          if (key !== 'week') {
            const locationData = weekData[key];
            aggregated.giving += locationData.giving || 0;
            aggregated.adults += locationData.adults || 0;
            aggregated.volunteers += locationData.volunteers || 0;
            aggregated.kids += locationData.kids || 0;
            aggregated.decisions += locationData.decisions || 0;
            aggregated.newMembers += locationData.newMembers || 0;
          }
        });

        return aggregated;
      });
    } else {
      // Filter for specific location
      const locationKey = getLocationKey(selectedLocation);
      if (!locationKey) {
        console.error('Invalid location:', selectedLocation);
        return [];
      }

      return filteredWeeks.map((weekData) => {
        const locationData = weekData[locationKey];
        if (!locationData) {
          console.error('No data for location:', locationKey, 'in week:', weekData.week);
          return {
            week: weekData.week,
            giving: 0,
            adults: 0,
            volunteers: 0,
            kids: 0,
            decisions: 0,
            newMembers: 0
          };
        }

        return {
          week: weekData.week,
          giving: locationData.giving || 0,
          adults: locationData.adults || 0,
          volunteers: locationData.volunteers || 0,
          kids: locationData.kids || 0,
          decisions: locationData.decisions || 0,
          newMembers: locationData.newMembers || 0
        };
      });
    }
  };

  const weeklyData = getFilteredData();

  // Calculate total attendance for each week
  const weeklyDataWithTotals = weeklyData.map((week) => ({
    ...week,
    totalAttendance: week.adults + week.volunteers + week.kids
  }));

  // Calculate averages based on timeframe
  const calculateAverages = (dataArray, field) => {
    if (dataArray.length === 0) return 0;
    const sum = dataArray.reduce((acc, week) => acc + week[field], 0);
    return sum / dataArray.length;
  };

  const averages = {
    giving: calculateAverages(weeklyData, 'giving'),
    adults: calculateAverages(weeklyData, 'adults'),
    volunteers: calculateAverages(weeklyData, 'volunteers'),
    kids: calculateAverages(weeklyData, 'kids'),
    decisions: calculateAverages(weeklyData, 'decisions'),
    newMembers: calculateAverages(weeklyData, 'newMembers'),
    totalAttendance: calculateAverages(weeklyDataWithTotals, 'totalAttendance')
  };

  // Get current and previous period stats based on timeframe
  const getCurrentAndPreviousPeriodStats = () => {
    if (weeklyData.length === 0) {
      return {
        current: { giving: 0, adults: 0, volunteers: 0, kids: 0, decisions: 0, newMembers: 0 },
        previous: { giving: 0, adults: 0, volunteers: 0, kids: 0, decisions: 0, newMembers: 0 },
        periodLabel: 'vs. previous period'
      };
    }

    let current, previous, periodLabel;

    switch (selectedTimeframe) {
      case 'Last 4 Weeks':
        // Compare last 2 weeks vs previous 2 weeks
        if (weeklyData.length >= 4) {
          const lastTwoWeeks = weeklyData.slice(-2);
          const prevTwoWeeks = weeklyData.slice(-4, -2);

          current = {
            giving:
              lastTwoWeeks.reduce((sum, week) => sum + (week.giving || 0), 0) /
              Math.max(lastTwoWeeks.length, 1),
            adults:
              lastTwoWeeks.reduce((sum, week) => sum + (week.adults || 0), 0) /
              Math.max(lastTwoWeeks.length, 1),
            volunteers:
              lastTwoWeeks.reduce((sum, week) => sum + (week.volunteers || 0), 0) /
              Math.max(lastTwoWeeks.length, 1),
            kids:
              lastTwoWeeks.reduce((sum, week) => sum + (week.kids || 0), 0) /
              Math.max(lastTwoWeeks.length, 1),
            decisions:
              lastTwoWeeks.reduce((sum, week) => sum + (week.decisions || 0), 0) /
              Math.max(lastTwoWeeks.length, 1),
            newMembers:
              lastTwoWeeks.reduce((sum, week) => sum + (week.newMembers || 0), 0) /
              Math.max(lastTwoWeeks.length, 1)
          };

          previous = {
            giving:
              prevTwoWeeks.reduce((sum, week) => sum + (week.giving || 0), 0) /
              Math.max(prevTwoWeeks.length, 1),
            adults:
              prevTwoWeeks.reduce((sum, week) => sum + (week.adults || 0), 0) /
              Math.max(prevTwoWeeks.length, 1),
            volunteers:
              prevTwoWeeks.reduce((sum, week) => sum + (week.volunteers || 0), 0) /
              Math.max(prevTwoWeeks.length, 1),
            kids:
              prevTwoWeeks.reduce((sum, week) => sum + (week.kids || 0), 0) /
              Math.max(prevTwoWeeks.length, 1),
            decisions:
              prevTwoWeeks.reduce((sum, week) => sum + (week.decisions || 0), 0) /
              Math.max(prevTwoWeeks.length, 1),
            newMembers:
              prevTwoWeeks.reduce((sum, week) => sum + (week.newMembers || 0), 0) /
              Math.max(prevTwoWeeks.length, 1)
          };
        } else {
          // Fallback if not enough data
          const lastWeek = weeklyData[weeklyData.length - 1] || { giving: 0, adults: 0, volunteers: 0, kids: 0, decisions: 0, newMembers: 0 };
          const prevWeek = weeklyData[weeklyData.length - 2] || lastWeek;
          current = lastWeek;
          previous = prevWeek;
        }

        periodLabel = 'vs. prev 2 weeks avg';
        break;

      case 'Last 12 Weeks':
        // Compare last week vs previous week (original behavior)
        current = weeklyData[weeklyData.length - 1] || {
          giving: 0,
          adults: 0,
          volunteers: 0,
          kids: 0,
          decisions: 0,
          newMembers: 0
        };
        previous = weeklyData[weeklyData.length - 2] || current;
        periodLabel = 'vs. last week';
        break;

      case 'Last 6 Months':
        // Compare last 4 weeks vs previous 4 weeks
        if (weeklyData.length >= 8) {
          const lastFourWeeks = weeklyData.slice(-4);
          const prevFourWeeks = weeklyData.slice(-8, -4);

          current = {
            giving:
              lastFourWeeks.reduce((sum, week) => sum + (week.giving || 0), 0) /
              Math.max(lastFourWeeks.length, 1),
            adults:
              lastFourWeeks.reduce((sum, week) => sum + (week.adults || 0), 0) /
              Math.max(lastFourWeeks.length, 1),
            volunteers:
              lastFourWeeks.reduce((sum, week) => sum + (week.volunteers || 0), 0) /
              Math.max(lastFourWeeks.length, 1),
            kids:
              lastFourWeeks.reduce((sum, week) => sum + (week.kids || 0), 0) /
              Math.max(lastFourWeeks.length, 1),
            decisions:
              lastFourWeeks.reduce((sum, week) => sum + (week.decisions || 0), 0) /
              Math.max(lastFourWeeks.length, 1),
            newMembers:
              lastFourWeeks.reduce((sum, week) => sum + (week.newMembers || 0), 0) /
              Math.max(lastFourWeeks.length, 1)
          };

          previous = {
            giving:
              prevFourWeeks.reduce((sum, week) => sum + (week.giving || 0), 0) /
              Math.max(prevFourWeeks.length, 1),
            adults:
              prevFourWeeks.reduce((sum, week) => sum + (week.adults || 0), 0) /
              Math.max(prevFourWeeks.length, 1),
            volunteers:
              prevFourWeeks.reduce((sum, week) => sum + (week.volunteers || 0), 0) /
              Math.max(prevFourWeeks.length, 1),
            kids:
              prevFourWeeks.reduce((sum, week) => sum + (week.kids || 0), 0) /
              Math.max(prevFourWeeks.length, 1),
            decisions:
              prevFourWeeks.reduce((sum, week) => sum + (week.decisions || 0), 0) /
              Math.max(prevFourWeeks.length, 1),
            newMembers:
              prevFourWeeks.reduce((sum, week) => sum + (week.newMembers || 0), 0) /
              Math.max(prevFourWeeks.length, 1)
          };
        } else {
          // Fallback if not enough data
          const lastWeek = weeklyData[weeklyData.length - 1] || { giving: 0, adults: 0, volunteers: 0, kids: 0, decisions: 0, newMembers: 0 };
          const prevWeek = weeklyData[weeklyData.length - 2] || lastWeek;
          current = lastWeek;
          previous = prevWeek;
        }

        periodLabel = 'vs. prev 4 weeks avg';
        break;

      case 'Last Year':
        // Compare last 8 weeks vs previous 8 weeks
        if (weeklyData.length >= 16) {
          const lastEightWeeks = weeklyData.slice(-8);
          const prevEightWeeks = weeklyData.slice(-16, -8);

          current = {
            giving:
              lastEightWeeks.reduce((sum, week) => sum + (week.giving || 0), 0) /
              Math.max(lastEightWeeks.length, 1),
            adults:
              lastEightWeeks.reduce((sum, week) => sum + (week.adults || 0), 0) /
              Math.max(lastEightWeeks.length, 1),
            volunteers:
              lastEightWeeks.reduce((sum, week) => sum + (week.volunteers || 0), 0) /
              Math.max(lastEightWeeks.length, 1),
            kids:
              lastEightWeeks.reduce((sum, week) => sum + (week.kids || 0), 0) /
              Math.max(lastEightWeeks.length, 1),
            decisions:
              lastEightWeeks.reduce((sum, week) => sum + (week.decisions || 0), 0) /
              Math.max(lastEightWeeks.length, 1),
            newMembers:
              lastEightWeeks.reduce((sum, week) => sum + (week.newMembers || 0), 0) /
              Math.max(lastEightWeeks.length, 1)
          };

          previous = {
            giving:
              prevEightWeeks.reduce((sum, week) => sum + (week.giving || 0), 0) /
              Math.max(prevEightWeeks.length, 1),
            adults:
              prevEightWeeks.reduce((sum, week) => sum + (week.adults || 0), 0) /
              Math.max(prevEightWeeks.length, 1),
            volunteers:
              prevEightWeeks.reduce((sum, week) => sum + (week.volunteers || 0), 0) /
              Math.max(prevEightWeeks.length, 1),
            kids:
              prevEightWeeks.reduce((sum, week) => sum + (week.kids || 0), 0) /
              Math.max(prevEightWeeks.length, 1),
            decisions:
              prevEightWeeks.reduce((sum, week) => sum + (week.decisions || 0), 0) /
              Math.max(prevEightWeeks.length, 1),
            newMembers:
              prevEightWeeks.reduce((sum, week) => sum + (week.newMembers || 0), 0) /
              Math.max(prevEightWeeks.length, 1)
          };
        } else {
          // Fallback if not enough data
          const lastWeek = weeklyData[weeklyData.length - 1] || { giving: 0, adults: 0, volunteers: 0, kids: 0, decisions: 0, newMembers: 0 };
          const prevWeek = weeklyData[weeklyData.length - 2] || lastWeek;
          current = lastWeek;
          previous = prevWeek;
        }

        periodLabel = 'vs. prev 8 weeks avg';
        break;

      default:
        current = weeklyData[weeklyData.length - 1] || {
          giving: 0,
          adults: 0,
          volunteers: 0,
          kids: 0,
          decisions: 0,
          newMembers: 0
        };
        previous = weeklyData[weeklyData.length - 2] || current;
        periodLabel = 'vs. last week';
    }

    // Ensure all values are numbers
    const sanitize = (obj) => ({
      giving: Number(obj.giving) || 0,
      adults: Number(obj.adults) || 0,
      volunteers: Number(obj.volunteers) || 0,
      kids: Number(obj.kids) || 0,
      decisions: Number(obj.decisions) || 0,
      newMembers: Number(obj.newMembers) || 0
    });

    return {
      current: sanitize(current),
      previous: sanitize(previous),
      periodLabel
    };
  };

  const { current: currentPeriod, previous: previousPeriod, periodLabel } = getCurrentAndPreviousPeriodStats();

  const currentWeekStats = {
    totalGiving: Math.round(currentPeriod.giving),
    totalAttendance: Math.round(currentPeriod.adults),
    totalVolunteers: Math.round(currentPeriod.volunteers),
    totalKids: Math.round(currentPeriod.kids),
    totalDecisions: Math.round(currentPeriod.decisions),
    totalNewMembers: Math.round(currentPeriod.newMembers),
    totalAllAttendance:
      Math.round(currentPeriod.adults + currentPeriod.volunteers + currentPeriod.kids),
    royalKidsPercent:
      ((currentPeriod.kids) /
        (currentPeriod.adults + currentPeriod.volunteers + currentPeriod.kids)) *
        100 || 0,
    altarDecisionsPercent:
      ((currentPeriod.decisions) /
        (currentPeriod.adults + currentPeriod.volunteers + currentPeriod.kids)) *
        100 || 0
  };

  const previousWeekStats = {
    totalGiving: Math.round(previousPeriod.giving),
    totalAttendance: Math.round(previousPeriod.adults),
    totalVolunteers: Math.round(previousPeriod.volunteers),
    totalKids: Math.round(previousPeriod.kids),
    totalDecisions: Math.round(previousPeriod.decisions),
    totalNewMembers: Math.round(previousPeriod.newMembers),
    totalAllAttendance:
      Math.round(previousPeriod.adults + previousPeriod.volunteers + previousPeriod.kids),
    royalKidsPercent:
      ((previousPeriod.kids) /
        (previousPeriod.adults + previousPeriod.volunteers + previousPeriod.kids)) *
        100 || 0,
    altarDecisionsPercent:
      ((previousPeriod.decisions) /
        (previousPeriod.adults + previousPeriod.volunteers + previousPeriod.kids)) *
        100 || 0
  };

  // Location breakdown data - show individual locations when "All Locations" selected
  const getLocationBreakdown = () => {
    if (selectedLocation === 'All Locations') {
      const latestWeek = allLocationWeeklyData[allLocationWeeklyData.length - 1];
      return [
        {
          name: 'Mountain View',
          attendance:
            latestWeek.mountainView.adults +
            latestWeek.mountainView.volunteers +
            latestWeek.mountainView.kids,
          giving: latestWeek.mountainView.giving,
          color: '#8884d8'
        },
        {
          name: 'San Jose',
          attendance:
            latestWeek.sanJose.adults +
            latestWeek.sanJose.volunteers +
            latestWeek.sanJose.kids,
          giving: latestWeek.sanJose.giving,
          color: '#82ca9d'
        },
        {
          name: 'San Francisco',
          attendance:
            latestWeek.sanFrancisco.adults +
            latestWeek.sanFrancisco.volunteers +
            latestWeek.sanFrancisco.kids,
          giving: latestWeek.sanFrancisco.giving,
          color: '#ffc658'
        },
        {
          name: 'Oakland',
          attendance:
            latestWeek.oakland.adults +
            latestWeek.oakland.volunteers +
            latestWeek.oakland.kids,
          giving: latestWeek.oakland.giving,
          color: '#ff7300'
        },
        {
          name: 'Rome',
          attendance:
            latestWeek.rome.adults + latestWeek.rome.volunteers + latestWeek.rome.kids,
          giving: latestWeek.rome.giving,
          color: '#e74c3c'
        },
        {
          name: 'Milan',
          attendance:
            latestWeek.milan.adults + latestWeek.milan.volunteers + latestWeek.milan.kids,
          giving: latestWeek.milan.giving,
          color: '#d084d0'
        },
        {
          name: 'Modena',
          attendance:
            latestWeek.modena.adults + latestWeek.modena.volunteers + latestWeek.modena.kids,
          giving: latestWeek.modena.giving,
          color: '#2ecc71'
        },
        {
          name: 'Chicago',
          attendance:
            latestWeek.chicago.adults + latestWeek.chicago.volunteers + latestWeek.chicago.kids,
          giving: latestWeek.chicago.giving,
          color: '#3498db'
        }
      ];
    } else {
      // For individual locations, show breakdown by category
      return [
        { name: 'Adults', attendance: currentPeriod.adults, giving: 0, color: '#3b82f6' },
        { name: 'Volunteers', attendance: currentPeriod.volunteers, giving: 0, color: '#8b5cf6' },
        { name: 'Kids', attendance: currentPeriod.kids, giving: 0, color: '#f59e0b' }
      ];
    }
  };

  const locationBreakdown = getLocationBreakdown();

  const calculateChange = (current, previous) => {
    if (previous === 0 && current === 0)
      return { value: '0.0', isPositive: true, color: 'text-gray-600', bgColor: 'bg-gray-100' };
    if (previous === 0)
      return { value: '100.0', isPositive: true, color: 'text-green-600', bgColor: 'bg-green-100' };

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

  const StatCard = ({
    title,
    current,
    previous,
    icon: Icon,
    color,
    prefix = '',
    suffix = '',
    average = null,
    periodLabel
  }) => {
    const change = calculateChange(current, previous);
    return (
      <div className="bg-white p-6 rounded-lg shadow-md border">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-full ${color}`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className={`flex items-center text-sm font-medium px-3 py-1 rounded-full ${change.color} ${change.bgColor}`}>
            {change.isPositive ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
            {change.isPositive ? '+' : '-'}
            {change.value}%
          </div>
        </div>
        <h3 className="text-lg font-semibold text-gray-700 mb-1">{title}</h3>
        <p className={`text-3xl font-bold ${change.color}`}>{prefix}{current.toLocaleString()}{suffix}</p>
        <p className="text-sm text-gray-500 mt-1">
          {periodLabel}: {prefix}{previous.toLocaleString()}{suffix}
        </p>
        {average !== null && (
          <p className="text-xs text-gray-400 mt-1">
            {selectedTimeframe.toLowerCase()} avg: {prefix}{Math.round(average).toLocaleString()}{suffix}
          </p>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Church Health Dashboard
            {selectedLocation !== 'All Locations' && (
              <span className="text-xl text-blue-600 ml-2">- {selectedLocation}</span>
            )}
          </h1>
          <p className="text-gray-600">
            {selectedLocation === 'All Locations'
              ? `Multi-location insights and trends (${selectedTimeframe})`
              : `${selectedLocation} location insights and trends (${selectedTimeframe})`}
          </p>
        </div>

        {/* Filters */}
        <div className="flex gap-4 mb-8">
          <div className="relative">
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
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
            periodLabel={periodLabel}
          />
          <StatCard
            title="Total Attendance"
            current={currentWeekStats.totalAllAttendance}
            previous={previousWeekStats.totalAllAttendance}
            icon={Users}
            color="bg-slate-600"
            average={averages.totalAttendance}
            periodLabel={periodLabel}
          />
          <StatCard
            title="Adult Attendance"
            current={currentWeekStats.totalAttendance}
            previous={previousWeekStats.totalAttendance}
            icon={Users}
            color="bg-blue-500"
            average={averages.adults}
            periodLabel={periodLabel}
          />
          <StatCard
            title="Volunteers"
            current={currentWeekStats.totalVolunteers}
            previous={previousWeekStats.totalVolunteers}
            icon={Heart}
            color="bg-purple-500"
            average={averages.volunteers}
            periodLabel={periodLabel}
          />
          <StatCard
            title="Kids Attendance"
            current={currentWeekStats.totalKids}
            previous={previousWeekStats.totalKids}
            icon={Users}
            color="bg-orange-500"
            average={averages.kids}
            periodLabel={periodLabel}
          />
          <StatCard
            title="Altar Decisions"
            current={currentWeekStats.totalDecisions}
            previous={previousWeekStats.totalDecisions}
            icon={Heart}
            color="bg-red-500"
            average={averages.decisions}
            periodLabel={periodLabel}
          />
          <StatCard
            title="New Members"
            current={currentWeekStats.totalNewMembers}
            previous={previousWeekStats.totalNewMembers}
            icon={UserPlus}
            color="bg-indigo-500"
            average={averages.newMembers}
            periodLabel={periodLabel}
          />
          <StatCard
            title="Royal Kids %"
            current={parseFloat(currentWeekStats.royalKidsPercent.toFixed(1))}
            previous={parseFloat(previousWeekStats.royalKidsPercent.toFixed(1))}
            icon={Users}
            color="bg-pink-500"
            suffix="%"
            periodLabel={periodLabel}
          />
          <StatCard
            title="Altar Decisions %"
            current={parseFloat(currentWeekStats.altarDecisionsPercent.toFixed(1))}
            previous={parseFloat(previousWeekStats.altarDecisionsPercent.toFixed(1))}
            icon={Heart}
            color="bg-emerald-500"
            suffix="%"
            periodLabel={periodLabel}
          />
        </div>

        {/* Charts Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Giving Trends */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Giving Trends {selectedLocation !== 'All Locations' && `- ${selectedLocation}`} (
              {selectedTimeframe})
            </h3>
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
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Attendance Trends {selectedLocation !== 'All Locations' && `- ${selectedLocation}`}{' '}
              ({selectedTimeframe})
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={weeklyDataWithTotals}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="totalAttendance"
                  stroke="#1f2937"
                  strokeWidth={3}
                  name="Total Attendance"
                />
                <Line type="monotone" dataKey="adults" stroke="#3b82f6" strokeWidth={2} name="Adults" />
                <Line type="monotone" dataKey="kids" stroke="#f59e0b" strokeWidth={2} name="Kids" />
                <Line
                  type="monotone"
                  dataKey="volunteers"
                  stroke="#8b5cf6"
                  strokeWidth={2}
                  name="Volunteers"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Charts Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Location/Category Breakdown */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {selectedLocation === 'All Locations'
                ? 'Current Week Attendance by Location'
                : `${selectedLocation} Attendance Breakdown`}
            </h3>
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
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Ministry Impact {selectedLocation !== 'All Locations' && `- ${selectedLocation}`}{' '}
              ({selectedTimeframe})
            </h3>
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

        {/* Conditional rendering: Only show stacked charts for "All Locations" */}
        {selectedLocation === 'All Locations' && (
          <>
            {/* Attendance by Location Over Time */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Total Attendance by Location Over Time
              </h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart
                  data={allLocationWeeklyData.map((week) => ({
                    week: week.week,
                    mountainView:
                      week.mountainView.adults +
                      week.mountainView.volunteers +
                      week.mountainView.kids,
                    sanJose:
                      week.sanJose.adults + week.sanJose.volunteers + week.sanJose.kids,
                    sanFrancisco:
                      week.sanFrancisco.adults +
                      week.sanFrancisco.volunteers +
                      week.sanFrancisco.kids,
                    oakland:
                      week.oakland.adults + week.oakland.volunteers + week.oakland.kids,
                    rome: week.rome.adults + week.rome.volunteers + week.rome.kids,
                    milan: week.milan.adults + week.milan.volunteers + week.milan.kids,
                    modena: week.modena.adults + week.modena.volunteers + week.modena.kids,
                    chicago: week.chicago.adults + week.chicago.volunteers + week.chicago.kids
                  }))}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="mountainView" stackId="a" fill="#8884d8" name="Mountain View" />
                  <Bar dataKey="sanJose" stackId="a" fill="#82ca9d" name="San Jose" />
                  <Bar dataKey="sanFrancisco" stackId="a" fill="#ffc658" name="San Francisco" />
                  <Bar dataKey="oakland" stackId="a" fill="#ff7300" name="Oakland" />
                  <Bar dataKey="rome" stackId="a" fill="#e74c3c" name="Rome" />
                  <Bar dataKey="milan" stackId="a" fill="#d084d0" name="Milan" />
                  <Bar dataKey="modena" stackId="a" fill="#2ecc71" name="Modena" />
                  <Bar dataKey="chicago" stackId="a" fill="#3498db" name="Chicago" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Weekly Giving by Location Over Time */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Weekly Giving by Location Over Time
              </h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart
                  data={allLocationWeeklyData.map((week) => ({
                    week: week.week,
                    mountainView: week.mountainView.giving,
                    sanJose: week.sanJose.giving,
                    sanFrancisco: week.sanFrancisco.giving,
                    oakland: week.oakland.giving,
                    rome: week.rome.giving,
                    milan: week.milan.giving,
                    modena: week.modena.giving,
                    chicago: week.chicago.giving
                  }))}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`} />
                  <Tooltip formatter={(value) => [`${value.toLocaleString()}`, '']} />
                  <Legend />
                  <Bar dataKey="mountainView" stackId="b" fill="#8884d8" name="Mountain View" />
                  <Bar dataKey="sanJose" stackId="b" fill="#82ca9d" name="San Jose" />
                  <Bar dataKey="sanFrancisco" stackId="b" fill="#ffc658" name="San Francisco" />
                  <Bar dataKey="oakland" stackId="b" fill="#ff7300" name="Oakland" />
                  <Bar dataKey="rome" stackId="b" fill="#e74c3c" name="Rome" />
                  <Bar dataKey="milan" stackId="b" fill="#d084d0" name="Milan" />
                  <Bar dataKey="modena" stackId="b" fill="#2ecc71" name="Modena" />
                  <Bar dataKey="chicago" stackId="b" fill="#3498db" name="Chicago" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </>
        )}

        {/* Insights Panel */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Key Insights & Recommendations {selectedLocation !== 'All Locations' && `- ${selectedLocation}`}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">📈 Positive Trends</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                {selectedLocation === 'All Locations' ? (
                  <>
                    <li>• Week 11 showed exceptional growth across all locations</li>
                    <li>• Consistent volunteer engagement globally</li>
                    <li>• Strong kids ministry participation worldwide</li>
                    <li>• New member integration averaging well per location</li>
                  </>
                ) : (
                  <>
                    <li>• Recent weeks showing strong community engagement</li>
                    <li>• Volunteer participation remaining consistent</li>
                    <li>• Kids ministry showing healthy numbers</li>
                    <li>• New member integration progressing well</li>
                  </>
                )}
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">⚠️ Areas for Attention</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                {selectedLocation === 'All Locations' ? (
                  <>
                    <li>• Some locations showing seasonal attendance dips</li>
                    <li>• Altar decisions vary significantly by location</li>
                    <li>• Digital giving adoption varies by region</li>
                    <li>• Weather impacts in certain geographical areas</li>
                  </>
                ) : (
                  <>
                    <li>• Monitor week-to-week attendance consistency</li>
                    <li>• Focus on increasing altar response opportunities</li>
                    <li>• Consider local community outreach expansion</li>
                    <li>• Evaluate seasonal impact factors</li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Qualitative Feedback */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <MessageSquare className="w-5 h-5 text-blue-500 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">
                Attendance Insights {selectedLocation !== 'All Locations' && `- ${selectedLocation}`}
              </h3>
            </div>
            <div className="space-y-4">
              {selectedLocation === 'All Locations' ? (
                <>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-sm font-medium text-gray-900">Mountain View</p>
                    <p className="text-sm text-gray-600">
                      "Strong tech community engagement. Youth group growing rapidly."
                    </p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <p className="text-sm font-medium text-gray-900">San Jose</p>
                    <p className="text-sm text-gray-600">
                      "New families program launched. Hispanic ministry expanding well."
                    </p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <p className="text-sm font-medium text-gray-900">Chicago</p>
                    <p className="text-sm text-gray-600">
                      "Weather affecting winter attendance. Indoor events showing good results."
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-sm font-medium text-gray-900">London</p>
                    <p className="text-sm text-gray-600">
                      "International student outreach thriving. Need more volunteers for translation."
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-sm font-medium text-gray-900">Recent Trends</p>
                    <p className="text-sm text-gray-600">
                      "Consistent growth patterns with strong community connections forming."
                    </p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <p className="text-sm font-medium text-gray-900">Ministry Health</p>
                    <p className="text-sm text-gray-600">
                      "Good balance across age groups with active volunteer participation."
                    </p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <p className="text-sm font-medium text-gray-900">Opportunities</p>
                    <p className="text-sm text-gray-600">
                      "Focus on first-time visitor retention and small group integration."
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <DollarSign className="w-5 h-5 text-green-500 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">
                Giving Insights {selectedLocation !== 'All Locations' && `- ${selectedLocation}`}
              </h3>
            </div>
            <div className="space-y-4">
              {selectedLocation === 'All Locations' ? (
                <>
                  <div className="border-l-4 border-green-500 pl-4">
                    <p className="text-sm font-medium text-gray-900">Global Trends</p>
                    <p className="text-sm text-gray-600">
                      "Multi-currency giving showing strong growth. Digital platforms adoption across
                      all locations."
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-sm font-medium text-gray-900">European Locations</p>
                    <p className="text-sm text-gray-600">
                      "Rome and Milan leading in consistency. Frankfurt showing strong tech professional
                      engagement."
                    </p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <p className="text-sm font-medium text-gray-900">Asia-Pacific</p>
                    <p className="text-sm text-gray-600">
                      "Dubai and Saigon experiencing rapid growth. Honolulu maintaining steady island
                      community."
                    </p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <p className="text-sm font-medium text-gray-900">Special Offerings</p>
                    <p className="text-sm text-gray-600">
                      "Global missions fund exceeding targets. Local community projects funded in each
                      region."
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="border-l-4 border-green-500 pl-4">
                    <p className="text-sm font-medium text-gray-900">Giving Patterns</p>
                    <p className="text-sm text-gray-600">
                      "Steady stewardship with strong community investment in local ministries."
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-sm font-medium text-gray-900">Digital Adoption</p>
                    <p className="text-sm text-gray-600">
                      "Online giving platform showing good adoption rates among congregation."
                    </p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <p className="text-sm font-medium text-gray-900">Special Projects</p>
                    <p className="text-sm text-gray-600">
                      "Local community outreach funding showing strong congregation support."
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
