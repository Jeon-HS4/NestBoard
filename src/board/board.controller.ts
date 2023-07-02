import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('board')
export class BoardController {
    constructor(private boardService: BoardService){}


    @Get('/')
    getAllBoard(): Board[] {
        return this.boardService.getAllBoard();
    }

    @Post()
    createBoard(
        @Body() createBoardDto: CreateBoardDto
    ): Board {
        return this.boardService.createBoard(createBoardDto);
    }

    @Get('/:id')
    getBoardById(@Param('id') id: String): Board{

        return this.boardService.getBoardById(id);
    }

    @Delete('/:id')
    deleteBoard(@Param('id') id: String): void{
        this.boardService.deleteBoard(id);
    }

    @Patch('/:id')
    updateBoard(
        @Param('id') id: String,
        @Body('status') status: BoardStatus): Board{
        return this.boardService.updateBoardStatus(id, status);
    }
}
