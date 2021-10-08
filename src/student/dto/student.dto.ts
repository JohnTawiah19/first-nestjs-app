export class CreateStudentDto {
  name: string
  teacher: string
}
export class UpdateStudentDto {
  name: string
  teacher: string
}

export class FindStudentResponseDto {
  id: string
  name: string
  teacher: string
}
export class StudentResponseDto {
  id: string
  name: string
  teacher: string
}
