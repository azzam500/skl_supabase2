import React from 'react';
import { Student } from '../types';
import { CheckCircle2, XCircle, Printer, Download, User } from 'lucide-react';
import { SCHOOL_NAME, ANNOUNCEMENT_YEAR } from '../constants';

interface ResultCardProps {
  student: Student;
  onReset: () => void;
}

export const ResultCard: React.FC<ResultCardProps> = ({ student, onReset }) => {
  const isPassed = student.status === 'LULUS';
  
  const statusColor = isPassed ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200';
  const icon = isPassed ? <CheckCircle2 className="h-12 w-12 text-green-600" /> : <XCircle className="h-12 w-12 text-red-600" />;
  const title = isPassed ? "SELAMAT! ANDA DINYATAKAN LULUS" : "MOHON MAAF, ANDA TIDAK LULUS";

  return (
    <div className="max-w-3xl mx-auto mt-8 px-4 animate-fade-in pb-12">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        {/* Status Banner */}
        <div className={`p-8 flex flex-col items-center text-center border-b ${statusColor}`}>
          <div className="bg-white p-3 rounded-full shadow-sm mb-4">
            {icon}
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-2">{title}</h3>
          <p className="opacity-90 font-medium">
            Pengumuman Kelulusan {ANNOUNCEMENT_YEAR}
          </p>
        </div>

        {/* Student Details */}
        <div className="p-6 sm:p-10">
          <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-100">
            <div className="h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
               <User className="h-8 w-8 text-gray-400" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900">{student.nama}</h4>
              <p className="text-gray-500">{student.nisn} • {student.kelas}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <DetailRow label="Nomor Ujian" value={student.nomor_ujian} />
            <DetailRow label="Jurusan" value={student.jurusan} />
            <DetailRow label="Nilai Rata-rata" value={student.nilai_rata_rata.toFixed(2)} />
            <DetailRow label="Status Akhir" value={student.status} highlight={isPassed} />
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-sm text-blue-800 mb-8">
            <strong>Catatan Sekolah:</strong> Silakan hubungi wali kelas atau bagian tata usaha untuk pengambilan Surat Keterangan Lulus (SKL) asli dan cap tiga jari.
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button 
              onClick={() => window.print()}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
            >
              <Printer className="h-4 w-4" />
              Cetak Bukti
            </button>
            {isPassed && (
               <button className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm shadow-blue-200">
                <Download className="h-4 w-4" />
                Unduh SKL Sementara
              </button>
            )}
            <button 
              onClick={onReset}
              className="flex items-center justify-center gap-2 px-6 py-3 text-gray-500 hover:text-gray-800 font-medium transition-colors"
            >
              Cek Siswa Lain
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const DetailRow: React.FC<{ label: string; value: string | number; highlight?: boolean }> = ({ label, value, highlight }) => (
  <div>
    <p className="text-sm text-gray-500 mb-1">{label}</p>
    <p className={`font-semibold text-lg ${highlight ? 'text-green-600' : 'text-gray-900'}`}>{value}</p>
  </div>
);
