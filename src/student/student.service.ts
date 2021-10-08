import { Injectable } from '@nestjs/common'
import { students } from 'src/db'
import { v4 as uuid } from 'uuid'
import { CreateStudentDto, FindStudentResponseDto, StudentResponseDto, UpdateStudentDto } from './dto/student.dto'

@Injectable()
export class StudentService {
  private students = students
  getStudents(): FindStudentResponseDto[] {
    return this.students
  }
  getStudentById(id: string): FindStudentResponseDto {
    return this.students.find((student) => {
      return student.id === id
    })
  }

  createStudent(payload: CreateStudentDto): StudentResponseDto {
    const newStudent = {
      id: uuid(),
      ...payload,
    }
    this.students.push(newStudent)
    return newStudent
  }
  updateStudent(payload: UpdateStudentDto, id: string): StudentResponseDto {
    let updatedStudent: StudentResponseDto

    const updatedStudentList = this.students.map((student) => {
      if (student.id === id) {
        return (updatedStudent = {
          id,
          ...payload,
        })
      }
      return student
    })
    this.students = updatedStudentList
    return updatedStudent
  }

  getStudentsbyTeacherId(id: string): FindStudentResponseDto[] {
    return this.students.filter((student) => {
      return student.teacher === id
    })
  }

  updateStudentTeacher(teacherId: string, studentId: string): StudentResponseDto {
    let updatedStudent: StudentResponseDto

    const updatedStudentList = this.students.map((student) => {
      if (student.id === studentId) {
        return (updatedStudent = {
          teacher: teacherId,
          ...student,
        })
      }
      return student
    })
    this.students = updatedStudentList
    return updatedStudent
  }
}
