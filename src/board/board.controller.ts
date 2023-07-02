import { Controller, Get, Post, Body, Param, Delete, Patch, UsePipes, ValidationPipe } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';

@Controller('board')
export class BoardController {
    constructor(private boardService: BoardService){}


    @Get('/')
    getAllBoard(): Board[] {
        return this.boardService.getAllBoard();
    }

    @Post()
    @UsePipes(ValidationPipe)
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

    @Patch('/:id/status')
    updateBoard(
        @Param('id') id: String,
        @Body('status', BoardStatusValidationPipe) status: BoardStatus): Board{
        return this.boardService.updateBoardStatus(id, status);
    }
}
