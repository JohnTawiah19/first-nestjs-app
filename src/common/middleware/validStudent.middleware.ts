import { HttpException, Injectable, NestMiddleware } from '@nestjs/common'
import { Request, Response, NextFunction } from 'express'
import { students } from 'src/db'

@Injectable()
export class ValidStudentMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('this middleware was called')
    const studentId = req.params.studentId
    const studentsExists = students.some((student) => {
      student.id === studentId
    })
    if (!studentsExists) {
      throw new HttpException('Student not found', 400)
    }

    next()
  }
}
