"use client"

interface TodoStatsProps {
  total: number
  completed: number
}

export default function TodoStats({ total, completed }: TodoStatsProps) {
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100)

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
      <div className="p-4 bg-slate-700/30 border border-slate-600 rounded-lg">
        <p className="text-slate-400 text-sm font-medium">Total Tasks</p>
        <p className="text-3xl font-bold text-white mt-2">{total}</p>
      </div>
      <div className="p-4 bg-slate-700/30 border border-slate-600 rounded-lg">
        <p className="text-slate-400 text-sm font-medium">Completed</p>
        <p className="text-3xl font-bold text-blue-400 mt-2">{completed}</p>
      </div>
      <div className="p-4 bg-slate-700/30 border border-slate-600 rounded-lg md:col-span-1 col-span-2">
        <p className="text-slate-400 text-sm font-medium">Progress</p>
        <p className="text-3xl font-bold text-emerald-400 mt-2">{percentage}%</p>
      </div>
    </div>
  )
}
