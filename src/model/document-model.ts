import {CredentialSubjects} from "@trustvc/trustvc/w3c/vc";
import {CHAIN_ID} from "@trustvc/trustvc";


export interface DocumentModel {
    documentId?: string,
    chainId?: CHAIN_ID,
    name?:string
    credentialSubject?: CredentialSubjects,
    owner?: string,
    holder?: string,
    issuer?: string,
    remarks?: string,
    issuanceDate?:string,
    expirationDate?:string
    didKeyPairs?: any,
    tokenRegistryAddress?: string,
}

export interface DocumentTransferabilityModel {
    documentId?:string
    remarks?: string,
    newHolder?: string,
    nominee?: string,
    issuer?: string
    chainId?: CHAIN_ID
    tokenRegistry?: string
    tokenId?: string
}

export enum TransferabilityActions{
    TRANSFER_HOLDER = 'transferHolder',
    TRANSFER_BENEFICIARY = 'transferBeneficiary',
    TRANSFER_OWNERS = 'transferOwners',
    NOMINATE = 'nominate',
    RETURN_TO_ISSUER = 'returnToIssuer',
    REJECT_TRANSFER_HOLDER = 'rejectTransferHolder',
    REJECT_TRANSFER_BENEFICIARY = 'rejectTransferBeneficiary',
    REJECT_TRANSFER_OWNERS = 'rejectTransferOwners',
    ACCEPT_ETR_RETURN = 'burn',
    REJECT_ETR_RETURN = 'restore'
}