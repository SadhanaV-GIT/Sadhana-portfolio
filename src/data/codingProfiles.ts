export interface CodingProfile {
  id: number;
  platform: string;
  stats: Record<string, string>;
  description: string;
  profileUrl: string;
  icon: string;
  color: string;
}

export const codingProfiles: CodingProfile[] = [
  {
    id: 1,
    platform: 'LeetCode',
    stats: {
      Rank: '2,315,515',
      'Problems Solved': '100+',
    },
    description: 'Actively solving Data Structures and Algorithms problems to improve coding skills, logical thinking, and interview preparation.',
    profileUrl: 'https://leetcode.com/your-username',
    icon: '🧩',
    color: 'from-orange-500 to-yellow-500',
  },
  {
    id: 2,
    platform: 'HackerRank',
    stats: {
      'Certificates Completed': '2',
    },
    description: 'Completed programming certifications and practiced coding challenges across multiple domains.',
    profileUrl: 'https://hackerrank.com/your-username',
    icon: '🏆',
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 3,
    platform: 'Skill Rack',
    stats: {
      Rank: '30,166',
      'Problems Solved': '800+',
    },
    description: 'Consistently solved programming challenges and strengthened problem-solving abilities through extensive coding practice.',
    profileUrl: 'https://www.skillrack.com/profile/your-id',
    icon: '⚡',
    color: 'from-indigo-500 to-violet-500',
  },
];
