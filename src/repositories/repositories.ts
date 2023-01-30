import { QueryResult } from "pg"
import prisma from "../database/db.js";
import { Genre, GenreEntity, Platform, PlatformEntity, Films, FilmsEntity } from "../protocols/films.js";

export async function findGenre(body: Genre): Promise<GenreEntity> {

    return prisma.genre.findFirst({
        where: {
            name: body.name
        }
    })
}

export async function findGenreID(body: Films): Promise<GenreEntity> {

    return prisma.genre.findFirst({
        where: {
            id: body.genre_id
        }
    })
}

export async function insertGenre(body: Genre): Promise<GenreEntity> {

    return prisma.genre.create({
        data: {
            name: body.name
        }
    })
}

export async function findPlatform(body: Platform): Promise<PlatformEntity> {
    return prisma.platform.findFirst({
        where: {
            name: body.name
        }
    })
}

export async function findPlatformID(body: Films): Promise<PlatformEntity> {
    return prisma.platform.findFirst({
        where: {
            id: body.platform_id
        }
    })

}

export async function insertPlatform(body: Platform): Promise<PlatformEntity> {
    return prisma.platform.create({
        data: {
            name: body.name
        }
    })
}

export async function findFilm(body: Films): Promise<FilmsEntity> {
    return prisma.films.findFirst({
        where: {
            name: body.name
        }
    })
}
export async function findFilmID(body: FilmsEntity): Promise<FilmsEntity> {
    return prisma.films.findFirst({
        where: {
            id: body.id
        }
    })
}

export async function insertFilms(body: Films): Promise<FilmsEntity> {
    return prisma.films.create({
        data: body

    })

}

export async function updateFilms(body: FilmsEntity): Promise<FilmsEntity> {
    return prisma.films.update({
        where: {
            id: body.id
        },
        data: {
            status: 'assistido'
        }
    })
}

export async function deleteFilms(body: FilmsEntity): Promise<FilmsEntity> {
    return prisma.films.delete({
        where:{
            id:body.id
        }
    })
}

