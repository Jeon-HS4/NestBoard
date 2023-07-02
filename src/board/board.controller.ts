import { Controller, Get, Post, Body } from '@nestjs/common';
import { Board } from './board.model';
import { BoardService } from './board.service';

@Controller('board')
export class BoardController {
    constructor(private boardService: BoardService){}


    @Get('/')
    getAllBoard(): Board[] {
        return this.boardService.getAllBoard();
    }

    @Post()
    createBoard(
        @Body('title') title: String,
        @Body('description') description: String
    ): Board {
        return this.boardService.createBoard(title, description);
    }
}
